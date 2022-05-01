const extractUrl = (url) => {
  console.log('**********')
  const regex = /http:\/\/|https:\/\//
  !url.match(regex) ? url = 'https://' + url : null
  const urlObj = new URL(url)
  const hostname = urlObj.hostname;
  const dotIndex = hostname.indexOf(".");
  console.log("dotIndex->", dotIndex);
  const hostnameChars = Array.from(hostname);
  console.log('hostnameChars-> ', hostnameChars);
  const dot = ".";
  let indexArray = [];
  let dotIndexes = hostnameChars.indexOf(dot);
  
  while (dotIndexes != -1) {
    indexArray.push(dotIndexes);
    dotIndexes = hostnameChars.indexOf(dot, dotIndexes + 1);
  }
  indexArray[0] += 1;
  console.log("indexArray-> ", indexArray);
  let result = "";
  hostnameChars.forEach((char) => {
    result += char;
  });
  console.log('result-> ', result);
  console.log('result.slice-> ',result.slice(indexArray[0], indexArray[1]));
  console.log('result.slice0-> ',result.slice(0, indexArray[0]));
  console.log('length-> ',result.slice(indexArray[0], indexArray[1]).length)
  console.log('match-> ', result.slice(indexArray[0], indexArray[1]).match(/com/g))
  const segment = result.slice(indexArray[0], indexArray[1])
  const regex1 = /com/
  console.log('regTest-> ', regex1.test(segment))
  if(segment.length > 2 && !regex1.test(segment)){
    console.log('result scope1-> ', result.slice(indexArray[0], indexArray[1]))
    return result.slice(indexArray[0], indexArray[1])
  } else if (regex1.test(segment) || segment.length < 2){
    indexArray[0] -= 1
    console.log('result scope2-> ', result.slice(0, indexArray[0]))
    return result.slice(0, indexArray[0])
  } else {
    indexArray[0] -= 1
    console.log('result scope3-> ', result.slice(0, indexArray[0]))
    return result.slice(0, indexArray[0])
  }
}
module.exports = extractUrl
extractUrl("http://google.com")
extractUrl("www.xakep.ru")
extractUrl("http://google.co.jp")
extractUrl("https://youtube.com")
extractUrl("https://hdxd4fsck7z1u0x8.biz/default.html")