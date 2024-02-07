const domainName = (url) => {
  const regex = /http:\/\/|https:\/\//;
  !url.match(regex) ? (url = "https://" + url) : null;
  const urlObj = new URL(url);
  const hostname = urlObj.hostname;
  const hostnameChars = Array.from(hostname);
  // Retrieving array of dot indexes
  const dot = ".";
  let indexArray = [];
  let dotIndexes = hostnameChars.indexOf(dot);
  while (dotIndexes != -1) {
    indexArray.push(dotIndexes);
    dotIndexes = hostnameChars.indexOf(dot, dotIndexes + 1);
  }
  indexArray[0] += 1;
  // Restructuring the hostname
  let result = "";
  hostnameChars.forEach((char) => {
    result += char;
  });
  // Splitting hostname where dots are and counting segments with length smaller or equal to 2
  const splitted = result.split(".");
  let count = 0;
  splitted.forEach((e) => {
    if (e.length <= 2) {
      count++;
    }
  });

  const regexWww = /www/g;
  if (indexArray.length === 1) {
    indexArray[0] -= 1;
    return result.slice(0, indexArray[0]);
  } else if (indexArray.length > 1 && count === 2) {
    if (regexWww.test(result)) {
      return result.slice(indexArray[0], indexArray[1]);
    } else {
      indexArray[0] -= 1;
      return result.slice(0, indexArray[0]);
    }
  } else if (indexArray.length > 1 && count !== 2) {
    return result.slice(indexArray[0], indexArray[1]);
  } else {
    indexArray[0] -= 1;
    return result.slice(0, indexArray[0]);
  }
};
module.exports = domainName

// const domainName = (url) => {
//   const foo = url.replace(
//     /https:\/\/www.|http:\/\/www\.|http:\/\/|https:\/\/|www\./,
//     ""
//   );
//   const dotIndex = foo.indexOf(".");

//   return foo.substr(0, dotIndex);
// };