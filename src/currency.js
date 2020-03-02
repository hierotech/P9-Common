import Big from 'big.js';

const CURRENCIES_FIAT = new Set(['USD']);

const DECIMAL_DIGIT_COUNT = {
  USD: 2,
  BTC: 8,
  ETH: 8
};

const CURRENCY_SIGNS = {
  USD: '$',
  BTC: '₿',
  ETH: 'Ξ'
};

const CRYPTO_UNIT_ATOM_COUNT = {
  BTC: new Big('100000000'),
  ETH: new Big('1000000000000000000')
};

export const CURRENCY_TYPES = ['USD', 'BTC', 'ETH'];

function _withCurrencySign(numberString, currency) {
  return CURRENCY_SIGNS[currency] + ' ' + numberString;
}

function _withThousandsSeparators(numberString) {
  const [integer, decimal] = numberString.split('.');

  return `${integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.${decimal}`;
}

export function cryptoAtomsToUnit(atoms, currency) {
  return (new Big(atoms)).div(CRYPTO_UNIT_ATOM_COUNT[currency]);
}

export function unitToCryptoAtoms(unit, currency) {
  return Number((new Big(unit)).times(CRYPTO_UNIT_ATOM_COUNT[currency]).toFixed(0));
}

export function formatCurrency(quantity, currency, {withSign = false, withSeparators = withSign} = {}) {
  const decimalDigits = DECIMAL_DIGIT_COUNT[currency];

  const number = new Big(quantity);

  let numberString = number.toFixed(decimalDigits);

  if (withSeparators) {
    numberString = _withThousandsSeparators(numberString);
  }

  if (withSign) {
    numberString = _withCurrencySign(numberString, currency);
  }

  return numberString;
}

export function isFiatCurrency(currency) {
  return CURRENCIES_FIAT.has(currency.toUpperCase());
}

export function isCryptoCurrency(currency) {
  return !isFiatCurrency(currency);
}

export function ratioPercent(q1, q2) {
  const n1 = new Big(q1);
  const n2 = new Big(q2);

  return n1.div(n2).times(100);
}
