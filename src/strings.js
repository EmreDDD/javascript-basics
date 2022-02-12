function sayHello (string) {
  return "Hello, "+string+"!";
  
};

function uppercase (string) {
return string.toUpperCase();
  
}

function lowercase (string) {
  return string.toLowerCase();};

function countCharacters (string) {
  let n = string.length;  {
    return n;
  }

};

function firstCharacter (string) {
  let x = string.charAt(0);
  return x;
};

function firstCharacters (string, n) {
  let x = string.substring(0, n);
  return x;
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
