//javascript to validate whether the given candidates are eligible to vote or not

//constructor for candidates
const constructor = function (firstName, middleName, lastName, gender, age) {
  this.firstName = firstName;
  this.middleName = middleName;
  this.lastName = lastName;
  this.gender = gender;
  this.age = age;
};

//list of candidates
const candidates = [
  new constructor("Khulpu", "Mechanshil", "Maring", "Male", 20),
  new constructor("Khulpu", "Muidou", "Maring", "Female", 15),
];

//validation to check whether the candidates is eligible to vote or not
const validation = function (person) {
  if (person.age > 18) {
    //returns if the given expression is true
    return `${person.firstName} ${person.middleName}, you are eligible to vote`;
  } else {
    return `not eligible`;
  }
};

//message to print after the validation executes
candidates.forEach((candidates) => console.log(validation(candidates)));
