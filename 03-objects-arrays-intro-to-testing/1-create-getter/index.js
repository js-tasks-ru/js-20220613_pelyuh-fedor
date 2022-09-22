/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const way = path.split('.');

  return function get (object) {
    let result = object[way[0]];
    let index = 1;
    while (index <= way.length) {
      if (!result) {
        return;
      }
      if (index === way.length) {
        return result;
      }
      result = result[way[index]];

      index += 1;
    }
  };
}
