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

export function createAddressString(address) {
  const {
    line_1: line1,
    line_2: line2,
    apartment,
    town,
    area,
    zip,
    country
  } = address;

  return [line1, line2, apartment, town, area, zip, country]
    .filter(part => Boolean(part))
    .join(', ');
}

export function createFullName(firstName, lastName, defaultValue = '') {
  if (!firstName && !lastName) {
    return defaultValue;
  }

  return `${firstName || ''}${(firstName && lastName) ? ' ' : ''}${lastName || ''}`;
}

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

export function delay(msecs, getCancelCallback) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, msecs);

    if (typeof getCancelCallback === 'function') {
      getCancelCallback(() => {
        clearTimeout(timer);

        reject();
      });
    }
  });
}

export function extractCount(items, propertyName = 'count_total') {
  if (items.length < 1) {
    return {
      items: [],
      countTotal: 0
    };
  }

  const countTotal = Number(items[0][propertyName]);

  items.forEach(item => {
    delete item.count_total;
  });

  return {items, countTotal};
}

export function hasOwnProperty(obj, propName) {
  return Object.prototype.hasOwnProperty.call(obj, propName);
}

export function excludeFields(obj, ...fields) {
  return Object.keys(obj)
    .filter(key => !fields.includes(key))
    .reduce((acc, key) => {
      acc[key] = obj[key];

      return acc;
    }, {});
}

export function exposeFields(obj, ...fields) {
  return fields.filter(propName => hasOwnProperty(obj, propName)).reduce((acc, propName) => {
    acc[propName] = obj[propName];

    return acc;
  }, {});
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
