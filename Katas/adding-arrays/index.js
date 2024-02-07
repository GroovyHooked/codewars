const arrAdder = (arr) => {
  let width = arr[0].length;
  let str1 = "";
  let str2 = "";
  let index = 0;

  const getWord = (index) => {
    arr.forEach((array) => {
      str1 += array[index];
    });
    str1 += " ";
    return str1;
  };
  while (width > 0) {
    str2 += getWord(index) + "/";
    width--;
    index++;
  }
  const split = str2.split("/");
  str2 = split[split.length - 2];

  const displayRes = str2.substring(0, str2.length - 1);
  return displayRes;
};
