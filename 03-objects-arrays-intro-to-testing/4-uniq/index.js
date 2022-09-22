/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  const newArr = [];
  if (arr && arr.length >= 1) {
    arr.map((item) => {
      if (!newArr.includes(item)) {
        newArr.push(item);
      }
    });
    return newArr;
  }
  return [];
}
