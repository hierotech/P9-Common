import axios from 'axios';

import * as Helper from './helper';

const API_DOMAIN_LV3 = 'api.btc.com';
const API_VERSION = 3;
const BTC_STATUS_429_PAUSE = 60 * 1000;
const REQUEST_INTERVAL_FACTOR = 1.25;

export function createClient({isTestnet, rpm}) {
  const BASE_URL = `https://${isTestnet ? 'tchain' : 'chain'}.${API_DOMAIN_LV3}/v${API_VERSION}`;
  const REQUEST_INTERVAL = Math.floor(((60 * 1000) / rpm) * REQUEST_INTERVAL_FACTOR);

  let lastRequestTime = 0;
  let useLongPause = false;
  let requestPromise = Promise.resolve();

  const _doRequest = async (methodPath, query) => {
    let url = `${BASE_URL}/${methodPath}`;

    if (query) {
      const qs = Helper.stringifyQuery(query);

      url += qs && `?${qs}`;
    }

    const delay = (lastRequestTime + (useLongPause ? BTC_STATUS_429_PAUSE : REQUEST_INTERVAL)) - Date.now();

    if (delay > 0) {
      await Helper.delay(delay);
    }

    useLongPause = false;

    try {
      const result = await axios.get(url);

      return result.data;
    } catch (err) {
      if (err.response && err.response.status === 429) {
        useLongPause = true;
      }

      throw err;
    } finally {
      lastRequestTime = Date.now();
    }
  };

  /**
   * Does a request to API
   * @param {string} path Full path to method including parameters, e.g. "address/15urYnyeJe3gwbGJ74wcX89Tz7ZtsFDVew/tx"
   * @param {object} [query] Query-parameters, e.g. {pagesize: 50, page: 1, verbose: 1}"
   * @returns {Promise<object>} Object from response
   */
  const request = async (path, query) => {
    try {
      await requestPromise;
    } catch {
      // This is to prevent mistakenly raising unhandled exception, as it must be handled in the caller scope
    }

    requestPromise = _doRequest(path, query);

    return requestPromise;
  };

  /**
   * Requests address's transactions with different level of verbosity.
   * @param {string} address Address to get transactions of
   * @param {object} [params] Parameters to the method
   * @param {number} [params.pagesize=50] Number of transactions per page (from 1 to 50 allowed)
   * @param {number} [params.page=1] Number of page with a portion of transactions
   * @param {number} [params.verbose=1] The level of verbosity for transaction details (from 1 to 3 allowed)
   * @returns {Promise<object>} Object with information about address's transactions and their content
   */
  const getAddressTransactions = async (address, params = {}) => {
    const {
      page = 1,
      pagesize = 50,
      verbose = 1
    } = params;

    const requestResult = await request(`address/${address}/tx`, {page, pagesize, verbose});

    return (requestResult.data && requestResult.data.list) || [];
  };

  return {getAddressTransactions, request};
}
