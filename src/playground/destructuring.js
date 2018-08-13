// 
// Object destructuring
// 

// const person = {
//   name: 'Etienne',
//   age: 35,
//   location: {
//     city: 'Cape Town',
//     temp: 20
//   }
// };

// const { name: firstname = 'Anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstname} is ${age} years old`);

// const { temp: temperature, city } = person.location;
// if (city && temperature) {
//   console.log(`Its ${temperature} here in ${city}`);
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'self published'} = book.publisher;

// console.log(publisherName)


//
// Array destructuring
//

const address = ['20 Petrus', 'Melkbos', 'Cape Town'];

const [street, place, city] = address;

console.log(`You are at ${address[0]} in ${address[1]} in ${address[2]}`  )
console.log(`You are at ${street} in ${place} in ${city}`  )
