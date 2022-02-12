function add (a, b) {
  let total=a+b;
  return total;
}

function subtract (a, b) {
  let total=a-b;
  return total;
}

function multiply (a, b) {
  let total=a*b;
  return total;
}

function divide (a, b) {
  let total=a/b;
  return total;
}

function power (a, b) {
  let total=a**b;
  return total;
}

function round (a) {
  let x= Math.round(a);
  return x;
}

function roundUp (a) {
  let x= Math.ceil(a);
  return x;
}

function roundDown (a) {
  let x= Math.floor(a);
  return x;
}

function absolute (a) {
  let x= Math.abs(a);
  return x;
}

function quotient (a, b) {
  let x = a/b;
  if(x<0){
  return Math.ceil(x);
}
    return Math.floor(x);
  }

function remainder (a, b) {
  let x = a%b;
  if(x<0){
  return Math.ceil(x);
}
    return Math.floor(x);
  }

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder
}
