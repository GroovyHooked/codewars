const myParseInt = (str) => {
  const numRegex1 = /([^a-zA-Z])*([0-9])+([^a-zA-Z])*/;
  const numRegex2 = /([^a-zA-Z])*([0-9])*(\.|[a-zA-Z])([0-9])*([^a-zA-Z])*/;
  if (str.match(numRegex1) !== null && str.match(numRegex2) === null) {
    return Number(str);
  } else {
    return "Nan";
  }
};
