const domainName = (url) => {
    const foo = url.replace(/https:\/\/www.|http:\/\/www\.|http:\/\/|https:\/\/|www\./, '')
    const dotIndex = foo.indexOf('.')
    
    return foo.substr(0,dotIndex) 
  }