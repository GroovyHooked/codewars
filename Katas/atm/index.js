const solve = (n) => {
  const arrayOfN = Array.from(String(n), (n) => Number(n));

  if (arrayOfN[arrayOfN.length - 1] !== 0) return -1;

  const getNumOfBills = () => {
    let count = 0;
    let clone = n;
    while (clone >= 500) {
      clone -= 500;
      count += 1;
    }
    while (clone >= 200 && clone > 0) {
      clone -= 200;
      count += 1;
    }
    while (clone >= 100 && clone > 0) {
      clone -= 100;
      count += 1;
    }
    while (clone >= 50 && clone > 0) {
      console.log("scope4");
      clone -= 50;
      count += 1;
    }
    while (clone >= 20 && clone > 0) {
      clone -= 20;
      count += 1;
    }
    while (clone >= 10 && clone > 0) {
      clone -= 10;
      count += 1;
    }
    return count;
  };

  return getNumOfBills();
};
