const planeFunc = function (n) {
  const waiting = `${n} number of planes waiting ${'✈️'.repeat(n)}`;
  return waiting;
};
console.log(planeFunc(8));
console.log(planeFunc(3));
console.log(planeFunc(5));
