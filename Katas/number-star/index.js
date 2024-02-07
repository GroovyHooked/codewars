const pattern = (n) => {
  
    if(n === 1) return n
    
    let result = "1\n1*2\n"
    let count = 1
    let num = 3
    
    for(let i = 2; i < n ; i++){
      result += '1*'
      for (let y = 1; y < i; y++){
        const star = '*'    
        result += star
      }
      count !== n - 2 ? result += `${num}\n` : result += `${num}`
      count++
      num++
    }
    
    return result.toString()
  }