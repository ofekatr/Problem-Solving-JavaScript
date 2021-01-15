const initPrevResultsArray = (i_Length) => {
  const prevResults = Array(i_Length);
  prevResults[0] = 0;
  prevResults[1] = 1;
  return prevResults;
}

const fibonacci = (i_Num) => {
  if (i_Num < 2) {
    if (i_Num >= 0) {
      return i_Num;
    }
    return;
  }

  const prevResults = initPrevResultsArray(i_Num);

  const rec = (i_CurrNum) => {
    if (prevResults[i_CurrNum] !== undefined) {
      return prevResults[i_CurrNum];
    }
    prevResults[i_CurrNum] = rec(i_CurrNum - 1) + rec(i_CurrNum - 2);
    return prevResults[i_CurrNum];
  }

  return rec(i_Num);
};

export default fibonacci;