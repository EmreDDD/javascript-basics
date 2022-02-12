function negate(a) {
  a = !a;
  return a;
};

function both(a, b) {
  if (a && b === true) {
    return true;
  } else {
    return false;
  }
};

function either(a, b) {
  if (a || b === true) {
    return true;
  } else {
    return false;
  }
};

function none(a, b) {
  if (a === false && b === false) {
    return true;
  } else {
    return false;
  }
};

function one(a, b) {
  if (a === false && b === false) {
    return false;
  } else if (a === true && b === true) {
    return false;
  } else if (a === true || b === true) {
    return true;
  }
};

function truthiness(a) {
  return !a == false

};

function isEqual(a, b) {
  if (a === b) return true;
  if (a == null || b !== null) return false;
  if (a !== null || b == null) return false;
  if (a.length !== b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

function isGreaterThan(a, b) {
  if (a>b){
    return true;
  }
  return false;
};

function isLessThanOrEqualTo(a, b) {
  if (a<=b){
    return true;
  }
  return false;
};

function isOdd(a) {
  if (a%2===1){
    return true;
  }
  return false;
};

function isEven(a) {
  if (a%2===0){
    return true;
  }
  return false;
};

function isSquare(a) {
  return a >=0 && Math.sqrt(a) % 1 === 0;
};

function startsWith(char, string) {
 let x= string.startsWith(char);
 return x;
};

function containsVowels(string) {
  let regExp = /[aeiou]/gi;
  let hasVowels = regExp.test(string)
  return hasVowels;
};

function isLowerCase(string) {
  return (string == string.toLowerCase()); 
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
