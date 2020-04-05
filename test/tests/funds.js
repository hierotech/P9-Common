const assert = require('assert');

import {Funds} from '../../src/index.node.js';

describe('Funds', () => {
  describe('getWithdrawFeeUsd', () => {
    it('should return correct values', () => {
      assert.strictEqual(Funds.getWithdrawFeeUsd(50).toString(), '30');
      assert.strictEqual(Funds.getWithdrawFeeUsd(10000).toString(), '35');
      assert.strictEqual(Funds.getWithdrawFeeUsd(500000).toString(), '100');
    });
  });
});
