export const CANDLESTICK_INTERVALS = ['1m', '5m', '15m', '1h', '4h', '1d'];

export const DATA_PROVIDERS = ['binance', 'bitmex', 'coinmarketcap', 'cryptocompare', 'deribit', 'iex'];

export const DEAL_TYPES = ['IPO', 'PRE_IPO', 'STARTUP', 'ETF'];
export const DEMAND_TYPES = ['COLD', 'WARM', 'HOT'];

export const TRANSACTION_TYPES = ['deposit', 'withdraw'];

export const IDENTITY_CARD_TYPES = ['passport'];

export const UPLOAD_TYPES = [
  'user_avatar',
  'user_passport',
  'user_residence_proof',
  'user_passport_selfie',
  'asset_logo',
  'asset_placeholder'
];
export const FILE_TYPES = [...UPLOAD_TYPES, 'user_agreement_signed', 'user_agreement_agent_signed'];

export const USER_LOCK_REASONS = ['password_change'];

export const USER_ID_SELF = 'self';

export const IMAGE_MIME_TYPES = ['image/png', 'image/jpeg'];

export const EXPECTED_SELL_FEE_COEFF = 0.005;
export const SUCCESS_FEE_DISCOUNT_PROMO = 0.5;
export const SUCCESS_FEE_DISCOUNT_PROMO_PERIOD = 180 * 24 * 60 * 60 * 1000;

export const WITHDRAW_FEE_USD_BASE = 20;
export const WITHDRAW_FEE_USD_COEFF = 0.0015;
export const WITHDRAW_FEE_USD_MAX = 100;
export const WITHDRAW_FEE_USD_MIN = 30;

export const RX_BTC_ADDRESS = /^\w{14,74}$/;
export const RX_DATE =
  /^20(1[6-9]|[2-9][0-9])-(0[1-9]|1[0-2])-([0-2][0-9]|3[0-1])T[0-5][0-9]:[0-5][0-9]:[0-5][0-9].[0-9]{3}Z$/;
export const RX_DATE_ANY =
  /^[1-2][0-9]{3}-(0[1-9]|1[0-2])-([0-2][0-9]|3[0-1])T[0-5][0-9]:[0-5][0-9]:[0-5][0-9].[0-9]{3}Z$/;
export const RX_EMAIL = /^[^@]+@[^@]+$/;
export const RX_NUMERIC = /^[0-9]+(\.[0-9]+)?$/;
export const RX_NUMERIC_NON_NEGATIVE = /^[0-9]+(\.[0-9]+)?$/;
export const RX_UUID = /^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$/i;
