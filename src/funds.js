import Big from 'big.js';

import {WITHDRAW_FEE_USD_BASE, WITHDRAW_FEE_USD_COEFF, WITHDRAW_FEE_USD_MAX, WITHDRAW_FEE_USD_MIN} from './constants';

function _getWithdrawFeeUsdFlexible(amount) {
  const fee = (new Big(amount)).times(WITHDRAW_FEE_USD_COEFF);

  if (fee.lt(WITHDRAW_FEE_USD_MIN)) {
    return new Big(WITHDRAW_FEE_USD_MIN);
  }

  if (fee.gt(WITHDRAW_FEE_USD_MAX)) {
    return new Big(WITHDRAW_FEE_USD_MAX);
  }

  return fee;
}

export function getWithdrawFeeUsd(amount) {
  return _getWithdrawFeeUsdFlexible(amount).plus(WITHDRAW_FEE_USD_BASE);
}
