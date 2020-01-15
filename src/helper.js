export const TIMESTAMP_PRECISION = {
  MILLISECOND: 0,
  SECOND: 1,
  MINUTE: 2,
  HOUR: 3,
  DAY: 4,
  MONTH: 5
};

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
