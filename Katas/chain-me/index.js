const chain = (input, fs) => {
  let curr = 0;
  let arg = input;
  for (let i = 0; i < fs.length; i++) {
    const prev = fs[i](arg);
    const next = fs[i + 1] === "function" ? fs[i + 1](prev) : prev;
    curr = next;
    arg = next;
  }
  return curr;
};
