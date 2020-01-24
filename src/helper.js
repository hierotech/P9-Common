export const TIMESTAMP_PRECISION = {
  MILLISECOND: 0,
  SECOND: 1,
  MINUTE: 2,
  HOUR: 3,
  DAY: 4,
  MONTH: 5
};

const AGREEMENT_AGENT_SIGNED_OR_REQUESTED_STATUSES = ['agreement_agent_requested', 'agreement_agent_signed'];
const AGREEMENT_SIGNED_STATUSES = ['agreement_signed', ...AGREEMENT_AGENT_SIGNED_OR_REQUESTED_STATUSES];
const AGREEMENT_SIGNED_OR_REQUESTED_STATUSES = ['agreement_requested', ...AGREEMENT_SIGNED_STATUSES];
const VERIFIED_STATUSES = ['verified', ...AGREEMENT_SIGNED_OR_REQUESTED_STATUSES];
const VERIFIED_OR_REQUESTED_STATUSES = ['verification_requested', ...VERIFIED_STATUSES];

export function createTimestamp(precision = TIMESTAMP_PRECISION.HOUR) {
  const timestamp = new Date();

  if (precision >= TIMESTAMP_PRECISION.SECOND) {
    timestamp.setUTCMilliseconds(0);
  }

  if (precision >= TIMESTAMP_PRECISION.MINUTE) {
    timestamp.setUTCSeconds(0);
  }

  if (precision >= TIMESTAMP_PRECISION.HOUR) {
    timestamp.setUTCMinutes(0);
  }

  if (precision >= TIMESTAMP_PRECISION.DAY) {
    timestamp.setUTCHours(0);
  }

  if (precision >= TIMESTAMP_PRECISION.MONTH) {
    timestamp.setUTCDate(1);
  }

  return timestamp;
}

export function delay(msecs) {
  return new Promise(resolve => setTimeout(resolve, msecs));
}

export function hasOwnProperty(obj, propName) {
  return Object.prototype.hasOwnProperty.call(obj, propName);
}

export function isAgreementAgentSignedOrRequestedStatus(legalStatus) {
  return AGREEMENT_AGENT_SIGNED_OR_REQUESTED_STATUSES.includes(legalStatus);
}

export function isAgreementSignedStatus(legalStatus) {
  return AGREEMENT_SIGNED_STATUSES.includes(legalStatus);
}

export function isAgreementSignedOrRequestedStatus(legalStatus) {
  return AGREEMENT_SIGNED_OR_REQUESTED_STATUSES.includes(legalStatus);
}

export function isVerifiedStatus(legalStatus) {
  return VERIFIED_STATUSES.includes(legalStatus);
}

export function isVerifiedOrRequestedStatus(legalStatus) {
  return VERIFIED_OR_REQUESTED_STATUSES.includes(legalStatus);
}

export function stringifyQuery(query) {
  return Object.keys(query).map(key => {
    const value = query[key];

    if (!Array.isArray(value)) {
      return `${key}=${encodeURIComponent(value)}`;
    }

    return value.map(v => `${key}=${encodeURIComponent(v)}`).join('&');
  }).join('&');
}

export function toChunks(array, chunkSize) {
  return [].concat.apply([], array.map((elem, i) => {
    return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
  }));
}
