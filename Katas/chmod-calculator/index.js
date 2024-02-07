const chmodCalculator = (perm) => {
  const regexArr = [/rwx/, /r-x/, /r--/, /---/, /--x/, /rw-/, /-wx/, /-w-/];
  const octal = ["7", "5", "4", "0", "1", "6", "3", "2"];
  let octalArray = [];
  perm.user === undefined
    ? octalArray.push(0)
    : regexArr.forEach((regex, index) =>
        perm.user.match(regex) ? octalArray.push(octal[index]) : null
      );
  perm.group === undefined
    ? octalArray.push(0)
    : regexArr.forEach((regex, index) =>
        perm.group.match(regex) ? octalArray.push(octal[index]) : null
      );
  perm.other === undefined
    ? octalArray.push(0)
    : regexArr.forEach((regex, index) =>
        perm.other.match(regex) ? octalArray.push(octal[index]) : null
      );

  let displayOctal = "";
  return octalArray.map((digit) => (displayOctal += digit))[2];
};

module.exports = chmodCalculator;
