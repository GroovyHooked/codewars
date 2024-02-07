const alphanumeric = (string) => {
  if (string.length === 0) return false;
  const regex1 = /([0-9a-zA-Z])z*/g;
  let isValid = true;
  [...string].forEach((car) => {
    if (!car.match(regex1)) {
      isValid = false;
    }
  });

  return isValid;
};
