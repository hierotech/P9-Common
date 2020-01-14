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
    timestamp.setMilliseconds(0);
  }

  if (precision >= TIMESTAMP_PRECISION.MINUTE) {
    timestamp.setSeconds(0);
  }

  if (precision >= TIMESTAMP_PRECISION.HOUR) {
    timestamp.setMinutes(0);
  }

  if (precision >= TIMESTAMP_PRECISION.DAY) {
    timestamp.setHours(0);
  }

  if (precision >= TIMESTAMP_PRECISION.MONTH) {
    timestamp.setDate(1);
  }

  return timestamp;
}
