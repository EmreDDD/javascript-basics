const getNthElement = (index, array) => {
  const newIndex = index % array.length;
  if (index >= array.length) {
    return array[newIndex];
  }
  else {
    return array[index];
  }
};

const arrayToCSVString = array => {
  return array.join(',')
};

const csvStringToArray = string => {
  return string.split(',')
};

const addToArray = (element, array) => {
  array.push(element)
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1)
};

const numbersToStrings = numbers => {
  return numbers.map(function (item) {
    return item.toString();
  })
};

const uppercaseWordsInArray = strings => {
  const uppercased = strings.map(strings => strings.toUpperCase());
  return uppercased;
};

const reverseWordsInArray = strings => {
  return strings.map(item => item.split('').reverse().join(''));
  };


const onlyEven = numbers => {
  let even_numbers = numbers.filter(elem => elem%2 == 0)
  return even_numbers;
};

const removeNthElement2 = (index, array) =>array.filter((_, i) => i !== index);
  

const elementsStartingWithAVowel = strings => {
    const vowels = ["a", "e", "i", "o", "u"];
    return strings.filter(string => {
      const firstLetter = string[0].toLowerCase();
      return vowels.includes(firstLetter);
    });
};


const removeSpaces = string => {
  for (i = 0; i < string.length; i++) {
    const regex = / /ig
    return string.replace(regex,'')
  }
};

const sumNumbers = numbers =>  numbers.reduce((a,b) => a + b, 0)


const sortByLastLetter = strings =>{
    return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}



module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
