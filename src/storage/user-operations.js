import {formatCurrency} from '../currency';

let pg = null;

export async function createUserOperationAsset(options) {
  let {type, userWalletId, assetTicker, price, quantity, balance, nominal = null, tx = pg} = options;

  const wallet = await tx('user_wallets')
    .where({id: userWalletId})
    .first('user_id', 'currency');

  if (!nominal) {
    nominal = wallet.currency;
  }

  const [operation] = await tx('user_operations')
    .insert({
      type,
      balance: formatCurrency(balance, nominal),
      user_id: wallet.user_id,
      user_wallet_id: userWalletId
    })
    .returning('*');

  const [operationAsset] = await tx('user_operations_asset')
    .insert({
      quantity,
      user_operation_id: operation.id,
      asset_ticker: assetTicker,
      price: formatCurrency(price, nominal)
    })
    .returning('*');

  return {
    ...operation,
    ...operationAsset
  };
}

export async function createUserOperationWallet(params) {
  const {type, userWalletId, amount, assetTicker, transactionId, balance, referralId, comment, tx = pg} = params;

  const wallet = await tx('user_wallets')
    .where({id: userWalletId})
    .first('user_id', 'currency');

  const userOperationData = {
    type,
    balance: formatCurrency(balance, wallet.currency),
    user_id: wallet.user_id,
    user_wallet_id: userWalletId
  };

  if (referralId) {
    userOperationData.referral_id = referralId;
  }

  if (comment) {
    userOperationData.comment = comment;
  }

  const [operation] = await tx('user_operations')
    .insert(userOperationData)
    .returning('*');

  const userOperationWalletData = {
    user_operation_id: operation.id,
    amount: formatCurrency(amount, wallet.currency)
  };

  if (assetTicker) {
    userOperationWalletData.asset_ticker = assetTicker;
  }

  if (transactionId) {
    userOperationWalletData.user_wallet_transaction_id = transactionId;
  }

  const [operationWallet] = await tx('user_operations_wallet')
    .insert(userOperationWalletData)
    .returning('*');

  return {
    ...operation,
    ...operationWallet
  };
}

export function init(postgresClient) {
  pg = postgresClient;
}
