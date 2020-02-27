import * as UserOperations from './user-operations';

export {UserOperations};

export function init(pg) {
  UserOperations.init(pg);
}
