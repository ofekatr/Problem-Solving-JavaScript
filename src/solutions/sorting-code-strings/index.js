/**
 * Input: An array of code strings in the format xxx.xxx.xxx....
 * Output: The sorted array in ascending IP addresses order.
 */

/**
 * Comparison function prioritizes code1 for negative return value,
 * And code2 for positive return value.
 * @param code1 A code element from the codes array.
 * @param code2 A code element from the codes array.
 */
const compareCodesFunc = (code1, code2) => {
  const minLength = Math.min(code1.length, code2.length);

  for (let i = 0; i < minLength; i++) {
    const diff = code1[i] - code2[i];

    // If negative prioritize code1, if positive prioritize code2.
    if (diff !== 0) {
      return diff;
    }
  }

  // If all common parts are equal, prioritize the shorter code.
  return code1.length - code2.length;
};

/**
 * Sort an array of code strings.
 * @param codesArr The code strings array to be sorted.
 */
const sortCodes = (codesArr) => {
  // Split each code string to an array of numbers.
  codesArr = codesArr.map((code) =>
    code.split(".").map((numStr) => Number(numStr))
  );

  // Sort the numeric strings arrays.
  codesArr.sort(compareFunc);

  // Join the numeric strings array back to a concatenated string.
  return codesArr.map((code) => code.join("."));
};

export default sortCodes;