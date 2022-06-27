/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size === 0) {
    return '';
  }
  if (!size || !string) {
    return string;
  }

  return [...string].reduce((accumValue, currentValue) => {
    if (!accumValue.endsWith(currentValue.repeat(size))) {
      return accumValue += currentValue;
    }
    return accumValue;
  });
}
