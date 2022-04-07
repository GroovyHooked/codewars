const amountOfPages = (summary) => {
  let result = "";
  let counter = 0;
  while (result.length < summary) {
    result += counter.toString();
    counter++;
  }
  return result.length < 10 ? counter : counter - 1;
};
