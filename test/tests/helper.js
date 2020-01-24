const assert = require('assert');

import {Helper} from '../../src';

// new
// info_provided
// verification_requested
// verified
// agreement_requested
// agreement_signed
// agreement_agent_requested
// agreement_agent_signed

describe('Helper', () => {
  describe('isAgreementAgentSignedOrRequestedStatus', () => {
    it('should return true on agreement_agent_requested and agreement_agent_signed', () => {
      assert.strictEqual(Helper.isAgreementAgentSignedOrRequestedStatus('agreement_agent_requested'), true);
      assert.strictEqual(Helper.isAgreementAgentSignedOrRequestedStatus('agreement_agent_signed'), true);
    });

    it('should return false on other statuses', () => {
      assert.strictEqual(Helper.isAgreementAgentSignedOrRequestedStatus('new'), false);
      assert.strictEqual(Helper.isAgreementAgentSignedOrRequestedStatus('info_provided'), false);
      assert.strictEqual(Helper.isAgreementAgentSignedOrRequestedStatus('verification_requested'), false);
      assert.strictEqual(Helper.isAgreementAgentSignedOrRequestedStatus('verified'), false);
      assert.strictEqual(Helper.isAgreementAgentSignedOrRequestedStatus('agreement_requested'), false);
      assert.strictEqual(Helper.isAgreementAgentSignedOrRequestedStatus('agreement_signed'), false);
    });
  });

  describe('isAgreementSignedStatus', () => {
    it('should return true on agreement_signed, agreement_agent_requested and agreement_agent_signed', () => {
      assert.strictEqual(Helper.isAgreementSignedStatus('agreement_signed'), true);
      assert.strictEqual(Helper.isAgreementSignedStatus('agreement_agent_requested'), true);
      assert.strictEqual(Helper.isAgreementSignedStatus('agreement_agent_signed'), true);
    });

    it('should return false on other statuses', () => {
      assert.strictEqual(Helper.isAgreementSignedStatus('new'), false);
      assert.strictEqual(Helper.isAgreementSignedStatus('info_provided'), false);
      assert.strictEqual(Helper.isAgreementSignedStatus('verification_requested'), false);
      assert.strictEqual(Helper.isAgreementSignedStatus('verified'), false);
      assert.strictEqual(Helper.isAgreementSignedStatus('agreement_requested'), false);
    });
  });

  describe('isAgreementSignedOrRequestedStatus', () => {
    it('should return true on agreement_requested, agreement_signed, agreement_agent_requested and agreement_agent_signed', () => {
      assert.strictEqual(Helper.isAgreementSignedOrRequestedStatus('agreement_requested'), true);
      assert.strictEqual(Helper.isAgreementSignedOrRequestedStatus('agreement_signed'), true);
      assert.strictEqual(Helper.isAgreementSignedOrRequestedStatus('agreement_agent_requested'), true);
      assert.strictEqual(Helper.isAgreementSignedOrRequestedStatus('agreement_agent_signed'), true);
    });

    it('should return false on other statuses', () => {
      assert.strictEqual(Helper.isAgreementSignedOrRequestedStatus('new'), false);
      assert.strictEqual(Helper.isAgreementSignedOrRequestedStatus('info_provided'), false);
      assert.strictEqual(Helper.isAgreementSignedOrRequestedStatus('verification_requested'), false);
      assert.strictEqual(Helper.isAgreementSignedOrRequestedStatus('verified'), false);
    });
  });

  describe('isVerifiedStatus', () => {
    it('should return true on verified, agreement_requested, agreement_signed, agreement_agent_requested and agreement_agent_signed', () => {
      assert.strictEqual(Helper.isVerifiedStatus('verified'), true);
      assert.strictEqual(Helper.isVerifiedStatus('agreement_requested'), true);
      assert.strictEqual(Helper.isVerifiedStatus('agreement_signed'), true);
      assert.strictEqual(Helper.isVerifiedStatus('agreement_agent_requested'), true);
      assert.strictEqual(Helper.isVerifiedStatus('agreement_agent_signed'), true);
    });

    it('should return false on other statuses', () => {
      assert.strictEqual(Helper.isVerifiedStatus('new'), false);
      assert.strictEqual(Helper.isVerifiedStatus('info_provided'), false);
      assert.strictEqual(Helper.isVerifiedStatus('verification_requested'), false);
    });
  });

  describe('isVerifiedOrRequestedStatus', () => {
    it('should return true on verification_requested, verified, agreement_requested, agreement_signed, agreement_agent_requested and agreement_agent_signed', () => {
      assert.strictEqual(Helper.isVerifiedOrRequestedStatus('verification_requested'), true);
      assert.strictEqual(Helper.isVerifiedOrRequestedStatus('verified'), true);
      assert.strictEqual(Helper.isVerifiedOrRequestedStatus('agreement_requested'), true);
      assert.strictEqual(Helper.isVerifiedOrRequestedStatus('agreement_signed'), true);
      assert.strictEqual(Helper.isVerifiedOrRequestedStatus('agreement_agent_requested'), true);
      assert.strictEqual(Helper.isVerifiedOrRequestedStatus('agreement_agent_signed'), true);
    });

    it('should return false on other statuses', () => {
      assert.strictEqual(Helper.isVerifiedOrRequestedStatus('new'), false);
      assert.strictEqual(Helper.isVerifiedOrRequestedStatus('info_provided'), false);
    });
  });
});
