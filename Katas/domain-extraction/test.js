
const domainName = (url) => {
  console.log('**********')
  const regex = /http:\/\/|https:\/\//
  !url.match(regex) ? url = 'https://' + url : null
  const urlObj = new URL(url)
  const hostname = urlObj.hostname;
  console.log('hostname-> ', hostname)
  const dotIndex = hostname.indexOf(".");
  //console.log("dotIndex->", dotIndex);
  const hostnameChars = Array.from(hostname);
  //console.log('hostnameChars-> ', hostnameChars);
  const dot = ".";
  let indexArray = [];
  let dotIndexes = hostnameChars.indexOf(dot);
  
  while (dotIndexes != -1) {
    indexArray.push(dotIndexes);
    dotIndexes = hostnameChars.indexOf(dot, dotIndexes + 1);
  }
  indexArray[0] += 1;
  //console.log("indexArray-> ", indexArray);

  let result = "";
  hostnameChars.forEach((char) => {
    result += char;
  });
  console.log('result-> ', result);
  const splitted = result.split('.')
  console.log('splitted-> ', splitted)
  let count = 0
  splitted.forEach(e => {
    if(e.length <= 2){
      count++
    }
  })
  console.log('count-> ', count)
  //console.log('result.slice-> ',result.slice(indexArray[0], indexArray[1]));
  //console.log('result.slice0-> ',result.slice(0, indexArray[0]));
  //console.log('length-> ',result.slice(indexArray[0], indexArray[1]).length)
  //console.log('match-> ', result.slice(indexArray[0], indexArray[1]).match(/com/g))
  const segment = result.slice(indexArray[0], indexArray[1])
  const regex1 = /www/g
  //console.log('regTest-> ', regex1.test(segment))
  console.log('indexArray-> ', indexArray)
  if(indexArray.length === 1) {
    indexArray[0] -= 1
    console.log('result scope1-> ', result.slice(0, indexArray[0]))
    return result.slice(0, indexArray[0])
  } else if (indexArray.length > 1 && count === 2){
    console.log()
    if(regex1.test(regex)){
      console.log("scope")
      return result.slice(indexArray[0], indexArray[1])
    }
    indexArray[0] -= 1
    console.log('result scope2-> ', result.slice(0, indexArray[0]))
    return result.slice(0, indexArray[0])
  } else if (indexArray.length > 1 && count !== 2) {
    console.log('result scope3-> ', result.slice(indexArray[0], indexArray[1]))
    return result.slice(indexArray[0], indexArray[1])
  } else {
    indexArray[0] -= 1
    console.log('result scope4-> ', result.slice(0, indexArray[0]))
    return result.slice(0, indexArray[0])
  }
}
module.exports = domainName
domainName("http://google.com")
domainName("www.xakep.ru")
domainName("http://google.co.jp")
domainName("https://youtube.com")
domainName("https://hdxd4fsck7z1u0x8.biz/default.html")
