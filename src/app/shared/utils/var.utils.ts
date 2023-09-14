const isDefined = <T>(el: T): boolean => el !== undefined;

const not = (el: boolean): boolean => !el;

const isEmptyString = (str: string): boolean => str === '';

const isUndefined = <T>(obj: T): boolean => obj === undefined;

const isNull = <T>(obj: T): boolean => obj === null;

const isNullOrUndefined = <T>(obj: T): boolean =>
  isNull(obj) || isUndefined(obj);

function deepCopy<T>(el: Array<T> | T): Array<T> | T {
  return JSON.parse(JSON.stringify(el));
}

function objectEquals<T>(el1: T, el2: T): boolean {
  return JSON.stringify(el1) === JSON.stringify(el2);
}

export {
  isNullOrUndefined,
  isEmptyString,
  objectEquals,
  isUndefined,
  isDefined,
  deepCopy,
  isNull,
  not,
};
