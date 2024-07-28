// VARIANTA 1
// const getAge = function(birth, death) {
//   if (!death) 
//     death = new Date().getFullYear();
//   return death - birth;
// }

// const findTheOldest = function(people) {
//   return people.reduce((oldest, currentPerson) => {
//     const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
//     const currentAge = getAge(
//       currentPerson.yearOfBirth,
//       currentPerson.yearOfDeath
//     );
//     return oldestAge < currentAge ? currentPerson : oldest;
//   })
// };

// VARIANTA 2
const getAge = function(person) {
  // The nullish coalescing assignment operator
  // only does the assignment if the left side is "nullish" (evaluates to undefined or null) 
  // if the left side has any other value, no assignment happens
  person.yearOfDeath ??= new Date().getFullYear();
  return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function (people) {
  const peopleOldestToYoungest = people.toSorted(
    (person, nextPerson) => getAge(nextPerson) - getAge(person),
  );

  const oldestPerson = peopleOldestToYoungest[0];
  return oldestPerson;
}

// Do not edit below this line
module.exports = findTheOldest;
