// isDefined('abc') => true; isDefined(undefined) => false
export const isDefined = <T>(el: T): boolean => el !== undefined;

// isUndefined('abc') => false; isUndefined(undefined) => true
export const isUndefined = <T>(obj: T): boolean => obj === undefined;

// isNull('abc') => false; isNull(null) => true
export const isNull = <T>(obj: T): boolean => obj === null;

// isNullOrUndefined('abc') => false; isNullOrUndefined(null) => true; isNullOrUndefined(undefined) => true
export const isNullOrUndefined = <T>(obj: T): boolean =>
  isNull(obj) || isUndefined(obj);

// objectEquals({ a: 1 }, { a: 1 }) => true
export const objectEquals = <T>(el1: T, el2: T): boolean =>
  structuredClone(el1) === structuredClone(el2);
