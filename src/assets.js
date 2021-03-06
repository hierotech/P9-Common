import Big from 'big.js';
import Decimal from 'decimal.js';

import {EXPECTED_SELL_FEE_COEFF, SUCCESS_FEE_DISCOUNT_PROMO, SUCCESS_FEE_DISCOUNT_PROMO_PERIOD} from './constants';

export function getSuccessFeeDiscount(user) {
  const userDiscount = user.success_fee_discount;

  const regDateOk = Date.now() < ((new Date(user.created_at)).getTime() + SUCCESS_FEE_DISCOUNT_PROMO_PERIOD);

  const promoDiscount = (user.referrer_id && regDateOk) ? SUCCESS_FEE_DISCOUNT_PROMO : null;

  if (userDiscount && promoDiscount) {
    return Math.max(Number(userDiscount), promoDiscount);
  }

  return userDiscount || promoDiscount;
}

export function getBuyPriceAmountSum(userAssetOperations) {
  return userAssetOperations
    .filter(({type}) => type === 'buy')
    .reduce((acc, {quantity, price}) => {
      return acc.plus((new Big(price)).times(quantity));
    }, new Big(0));
}

export function getBuyAmountSum(userAssetOperations) {
  return userAssetOperations
    .filter(({type}) => type === 'buy')
    .reduce((acc, {quantity}) => {
      return acc.plus(quantity);
    }, new Big(0));
}

export function getAverageBuyPrice(userAssetOperations) {
  const numerator = getBuyPriceAmountSum(userAssetOperations);
  const denominator = getBuyAmountSum(userAssetOperations);

  if (denominator.eq(0)) {
    return new Big(0);
  }

  return numerator.div(denominator);
}

export function getUsedBuyingPower(userAssetOperations) {
  const numerator = getBuyPriceAmountSum(userAssetOperations);
  const denominator = getBuyAmountSum(userAssetOperations);

  if (denominator.eq(0)) {
    return new Big(0);
  }

  const abp = numerator.div(denominator);

  const sellSum = userAssetOperations
    .filter(({type}) => type === 'sell')
    .reduce((acc, {quantity}) => {
      return acc.plus(abp.times(quantity));
    }, new Big(0));

  return numerator.minus(sellSum);
}

export function getOpenedUsedBuyingPower(userAssetOperations) {
  return getBuyPriceAmountSum(userAssetOperations);
}

export function getClosedUsedBuyingPower(userAssetOperations, quantity, timestamp = null) {
  const ts = timestamp && new Date(timestamp);

  const operations = ts ? userAssetOperations.filter(uo => new Date(uo.timestamp) < ts) : userAssetOperations;

  const numerator = getBuyPriceAmountSum(operations);
  const denominator = getBuyAmountSum(operations);

  if (denominator.eq(0)) {
    return new Big(0);
  }

  const abp = numerator.div(denominator);

  return abp.times(quantity);
}

export function getGrossValue(userAsset, userAssetOperations) {
  const value = (new Big(userAsset.price_last)).times(userAsset.quantity);

  if (userAsset.deal_type === 'ETF') {
    return value;
  }

  const sellSum = userAssetOperations
    .filter(({type}) => type === 'sell')
    .reduce((acc, {quantity, price}) => {
      return acc.plus((new Big(price)).times(quantity));
    }, new Big(0));

  return value.plus(sellSum);
}

export function getGrossProfit(userAsset, userAssetOperations) {
  const grossValue = getGrossValue(userAsset, userAssetOperations);

  if (userAsset.deal_type === 'ETF') {
    return grossValue.minus(getUsedBuyingPower(userAssetOperations));
  }

  return grossValue.minus(getBuyPriceAmountSum(userAssetOperations));
}

export function getOneMinusStrategyCoefficient(userAssetOperations) {
  const usedBuyingPower = getUsedBuyingPower(userAssetOperations);

  if (usedBuyingPower.eq(0)) {
    return new Big(0);
  }

  if (usedBuyingPower.lte(10000)) {
    return new Big(0.2);
  }

  if (usedBuyingPower.gte(1200000)) {
    return new Big(0.04);
  }

  const xPow = (new Decimal(usedBuyingPower.toString())).pow(0.876);

  return (new Big(50.75)).minus(Decimal.log(xPow, 1.3)).div(100);
}

export function getRealizedSuccessFee(userAssetOperations) {
  return userAssetOperations
    .filter(({type}) => type === 'success_fee')
    .reduce((acc, {amount}) => {
      return acc.plus(amount);
    }, new Big(0));
}

export function getSuccessFee(userAsset, userAssetOperations, user) {
  if (userAsset.deal_status === 'closed') {
    return getRealizedSuccessFee(userAssetOperations);
  }

  const abp = getAverageBuyPrice(userAssetOperations);
  const current = (new Big(userAsset.price_last)).minus(abp).times(userAsset.quantity);
  const historical = userAssetOperations
    .filter(({type}) => type === 'sell')
    .reduce((acc, {price, quantity}) => {
      return acc.plus((new Big(quantity)).times((new Big(price)).minus(abp)));
    }, new Big(0));

  const discount = user && getSuccessFeeDiscount(user);

  const pre = current.plus(historical);

  const successFee = pre.gt(0) ? pre.times(getOneMinusStrategyCoefficient(userAssetOperations)) : new Big(0);

  return discount ? successFee.times((new Big(1)).minus(discount)) : successFee;
}

export function getRealizedSellFee(userAssetOperations) {
  return userAssetOperations
    .filter(({type}) => type === 'sell_fee')
    .reduce((acc, {amount}) => {
      return acc.plus(amount);
    }, new Big(0));
}

export function getSellFee(userAsset, userAssetOperations) {
  if ((userAsset.deal_type === 'ETF') || (userAsset.deal_status === 'closed')) {
    return getRealizedSellFee(userAssetOperations);
  }

  return getGrossValue(userAsset, userAssetOperations).times(EXPECTED_SELL_FEE_COEFF);
}

export function getNetProfit(userAsset, userAssetOperations, user) {
  const grossProfit = getGrossProfit(userAsset, userAssetOperations);

  if (userAsset.deal_type === 'ETF') {
    return grossProfit;
  }

  const successFee = getSuccessFee(userAsset, userAssetOperations, user);
  const sellFee = getSellFee(userAsset, userAssetOperations);

  return grossProfit.minus(successFee.plus(sellFee));
}

export function getRealizedNetProfit(
  userAssetOperations,
  userAssetOperationsSell,
  startOfPeriod = null,
  endOfPeriod = null
) {
  const sellSum = userAssetOperationsSell
    .reduce((acc, {quantity, price}) => {
      return acc.plus((new Big(price)).times(quantity));
    }, new Big(0));

  const quantity = userAssetOperationsSell.reduce((acc, {quantity}) => {
    return acc.plus(quantity);
  }, new Big(0));

  const ts = new Date(Math.max(...userAssetOperationsSell.map(({timestamp}) => timestamp)));

  const grossProfit = sellSum.minus(getClosedUsedBuyingPower(userAssetOperations, quantity, ts));

  const tss = startOfPeriod && new Date(startOfPeriod);
  const tse = endOfPeriod && new Date(endOfPeriod);

  const operations = (tss && tse) ? userAssetOperations.filter(uo => {
    const ots = new Date(uo.timestamp);

    return (ots >= tss) && (ots < tse);
  }) : userAssetOperations;

  const successFee = getRealizedSuccessFee(operations);
  const sellFee = getRealizedSellFee(operations);

  return grossProfit.minus(successFee.plus(sellFee));
}
