const chmodCalculator = (perm) => {
  console.log(perm);
  const regexArr = [/rwx/, /r-x/, /r--/, /---/, /--x/, /rw-/, /-wx/, /-w-/];
  const octals = ["7", "5", "4", "0", "1", "6", "3", "2"];
  let octalArray = [];
  perm.user === undefined
    ? octalArray.push(0)
    : regexArr.forEach((regex, index) =>
        perm.user.match(regex) ? octalArray.push(octals[index]) : null
      );
  perm.group === undefined
    ? octalArray.push(0)
    : regexArr.forEach((regex, index) =>
        perm.group.match(regex) ? octalArray.push(octals[index]) : null
      );
  perm.other === undefined
    ? octalArray.push(0)
    : regexArr.forEach((regex, index) =>
        perm.other.match(regex) ? octalArray.push(octals[index]) : null
      );

  let displayOctals = "";
  return octalArray.map((digit) => (displayOctals += digit))[2];
};

module.exports = chmodCalculator;
