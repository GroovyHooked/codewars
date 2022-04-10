const betterThanAverage = (classPoints, yourPoints) => {
  const total = classPoints.reduce((acc, curr) => acc + curr);
  const average = total / classPoints.length;

  return yourPoints > average ? true : false;
};
