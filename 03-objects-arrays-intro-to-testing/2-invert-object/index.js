/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  const newObj = {};
  if (obj) {
    Object.entries(obj).forEach(([key, value])=> {
      newObj[value] = key;
    });
    return newObj;
  }
  return undefined;
}
