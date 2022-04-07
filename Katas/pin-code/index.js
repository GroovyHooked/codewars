const validatePIN = (pin) => {
    const reg4Digit = /^\d{4}$/s
    const reg6Digit = /^\d{6}$/s
    return reg4Digit.test(pin) || reg6Digit.test(pin) ? true : false 
  }