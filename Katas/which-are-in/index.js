const incrementString = (strng) => {
    const inputArr = [...strng];
    let arrOfStrNum = [];
    let arrOfCar = [];
    let string = "";
    // Récupération des chiffres de l'input
    inputArr.forEach((car, index) => {
      Number(car) >= 0 ? arrOfStrNum.push(car) : null;
    });
    // Transformation du tableau de caractères/chiffres en tableau de chiffres
    const arrOfNum = arrOfStrNum.map((num) => (num = Number(num)));
  
    // Récupération des caractères de l'input
    inputArr.forEach((car, index) => {
      Number(car) !== Number(car) ? arrOfCar.push(car) : null;
    });
  
    // Si aucun nombre récupéré, on retourne la chaine de caractères concaténée à "1"
    if (arrOfNum.length === 0) {
      return strng + "1";
    } else {
      // Sinon on transforme le tableau de chiffres en caractères, puis en nombre
      const myStrNumber = arrOfNum.reduce((acc, cur) => (acc += String(cur)));
      let myNumber = Number(myStrNumber);
  
      // On incrémente le nombre récupéré
      myNumber += 1;
  
      // Si aucun caractères et length de l'input > 1
      if (arrOfCar.length === 0 && inputArr.length > 1) {
        let displayNum = "";
        const numToArr = Array.from(String(myNumber));
        let nbOfzero = inputArr.length - numToArr.length;
        while (nbOfzero > 0) {
          displayNum += "0";
          nbOfzero--;
        }
        displayNum += myNumber;
        return String(displayNum);
      }
      // Si aucun caractères
      if (arrOfCar.length === 0) {
        return String(myNumber);
      }
      let numberToAdd = "";
      let nbOfZeros = myStrNumber.length - [...String(myNumber)].length;
  
      // Si il ne faut pas rajouter de 0 devant le nombre incrémenté de 1, on retoure le résultat
      if (nbOfZeros === 0) {
        return arrOfCar.reduce((acc, cur) => (acc += cur)) + myNumber;
      } else {
        // Sinon on ajoute le nombre de zero voulu
        while (nbOfZeros > 0) {
          numberToAdd += "0";
          nbOfZeros--;
        }
        numberToAdd += myNumber;
        return arrOfCar.reduce((acc, cur) => (acc += cur)) + numberToAdd;
      }
    }
  };
  