const assert = require('assert');

import {Funds} from '../../src/index.node.js';

describe('Funds', () => {
  describe('getWithdrawFeeUsd', () => {
    it('should return correct values', () => {
      assert.strictEqual(Funds.getWithdrawFeeUsd(50).toString(), '50');
      assert.strictEqual(Funds.getWithdrawFeeUsd(30000).toString(), '65');
      assert.strictEqual(Funds.getWithdrawFeeUsd(500000).toString(), '120');
    });
  });
});
