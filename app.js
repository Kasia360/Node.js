const fs = require('fs');

const gender = ['M', 'F'];
const females = [
  'Ala',
  'Jay',
  'Mickie',
  'Sharon',
  'Aga',
  'Melanie',
  'Cara',
  'Lysia',
  'Maria',
  'Elisa',
  'Karen',
  'Janen',
  'Mera',
  'Ava',
  'Daria',
  'Catherine',
  'Adrianna',
  'Yara',
  'Ann',
  'Dominika'
];
const males = [
  'Kaden',
  'Carol',
  'Craig',
  'Moris',
  'Carl',
  'Lou',
  'Jovanni',
  'Duck',
  'Kall',
  'Cristian',
  'Asher',
  'Peer',
  'Jacson',
  'Kael',
  'Ivo',
  'Bernard',
  'Ramzes',
  'Ezeq',
  'Rimvy',
  'Tuck'
];
const lastNames = [
  'Dodson',
  'Wag',
  'Kaz',
  'Schneider',
  'Louskas',
  'Fish',
  'Snype',
  'Noblegen',
  'Routas',
  'Max',
  'Niksas',
  'Daver',
  'Haller',
  'Taren',
  'Chock',
  'Lunatius',
  'Hammond',
  'Mcmeister',
  'Brodck',
  'Vitus'
];
const age = [];
for (let i = 18; i <= 78; i++) {
  age.push(i);
}

function randChoice(arr) {
  return arr[Math.floor(arr.length * Math.random())];
}

const people = [];
for (let i = 0; i < 20; i++) {
  let person = {};
  person.gender = randChoice(gender);
  if (person.gender == 'M') {
    person.firstName = randChoice(males);
  } else {
    person.firstName = randChoice(females);
  }
  person.lastName = randChoice(lastNames);
  person.age = randChoice(age);
  person.email = person.firstName + '.' + person.lastName + '@gmail.com';
  people.push(person);
}

const peopleJSON = JSON.stringify(people);

fs.writeFile('people.json', peopleJSON, err => {
  if (err) throw err;
  console.log('File has been successfully generated! Check people.json');
});
