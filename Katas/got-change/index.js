const giveChange = (amount) => {
  const bills = [1, 5, 10, 20, 50, 100];
  let result = [];

  for (let i = bills.length - 1; i >= 0; i--) {
    let nbOfBills = 0;
    while (amount >= bills[i]) {
      amount -= bills[i];
      nbOfBills++;
    }
    result[i] = nbOfBills;
  }
  return result;
};
