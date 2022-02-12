const createPerson = (name, age) => {
  return {name,age}
};

const getName = object => {
  return object.name
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object.hasOwnProperty(property)) {
    return true
  }
      return false
};

const isOver65 = person => {
  if (person.age >65){
    return true
  }
      return false
};

const getAges = people => {
  return people.map(person=>person.age)
};

const findByName = (name, people) => {
  return people.find(people => people.name ===name)
};

const findHondas = cars => {
 let x=cars.filter(cars=>cars.manufacturer==="Honda")
return x;
};

function averageAge(people) {
  let ages = people.map(person => person.age);
  let sum = ages.reduce((ages, b)=>ages+b,0);
  return sum / ages.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: strangersName => {
      return `Hi ${strangersName}, my name is ${name} and I am ${age}!`;
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
