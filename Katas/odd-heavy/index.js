const isOddHeavy = (n) => {
    const even = n.filter((n) => n % 2 === 0);
    const odd = n.filter((n) => n % 2 !== 0);
    if (odd.length === 0) return false;
    if (even.length === 0) return true;
  
    const highestEven = even.reduce((acc, curr) => {
      if (acc < curr) {
        return (acc = curr);
      } else {
        return acc;
      }
    });
    const lowestOdd = odd.reduce((acc, curr) => {
      if (acc > curr) {
        return (acc = curr);
      } else {
        return acc;
      }
    });
    return lowestOdd > highestEven;
  };
  
module.exports = isOddHeavy