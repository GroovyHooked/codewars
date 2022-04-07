const digital_root = (n) => { 
    const numberToArray = Array.from(String(n), n => Number(n))
    const result = numberToArray.reduce((prev, acc) => prev + acc, 0)
    
    return result.toString().length > 1 ? digital_root(result) : result    
}