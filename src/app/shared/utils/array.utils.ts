// take(2, ['foo', 'bar', 'baz']) // => ['foo', 'bar']
const take = <T>(number: number, array: T[]): T[] => array.slice(0, number);

// tail(["foo", "bar", "baz"]) // => ["bar", "baz"]
const tail = <T>(array: T[]): T[] => array.slice(1);

// head(["foo", "bar"]) // => "foo"
const head = <T>(array: T[]): T => array[0];

// last(["foo", "bar"]) // => "bar"
const last = <T>(array: T[]): T => array.slice(-1)[0];

// removeAt(["foo", "bar"], 1) => ["foo"]
const removeAt = <T>(array: T[], index: number): T[] => array.splice(index, 1);

// at("1900", 1) => 9
const at = (data: string, index: number): number => Number(data[index]);

// isNotEmpty(["foo", "bar"]) => true
const isNotEmpty = <T>(array: undefined | null | T[]): array is T[] =>
  !!(!!array && array.length);

// haveOverlap(["foo", "bar"], ["foo"]) => true
const haveOverlap = <T>(a1: T[], a2: T[]): boolean =>
  a1.some((el) => a2.includes(el));

// arraysEqual(['a', 'b'], ['a', 'b']) => true
const arraysEqual = <T>(array1: T[], array2: T[]): boolean => {
  return JSON.stringify(array1) === JSON.stringify(array2);
};

// createArray(3, 0) => [0, 1, 2]
const createArray = (len: number, initialValue = 0): number[] => {
  return [...Array(len).keys()].map((e) => e + initialValue);
};

// sortById([{ id: 2 }, { id: 1 }]) => [{ id: 1 }, { id: 2 }]
const sortById = <T extends { id: number }>(array: T[]): T[] =>
  [...array].sort((a, b) => (a.id > b.id ? 1 : -1));

// sort([{ id: 2 }, { id: 1 }], (el) => el.id) => [{ id: 1 }, { id: 2 }]
const sort = <T>(
  array: T[],
  callback: (el: T) => string | number,
  order: 'desc' | 'asc' = 'asc',
): T[] =>
  [...array].sort((a, b) =>
    callback(a) < callback(b)
      ? order === 'asc'
        ? -1
        : 1
      : callback(a) > callback(b)
      ? order === 'asc'
        ? 1
        : -1
      : 0,
  );

export {
  haveOverlap,
  arraysEqual,
  createArray,
  isNotEmpty,
  removeAt,
  sortById,
  sort,
  take,
  tail,
  head,
  last,
  at,
};
