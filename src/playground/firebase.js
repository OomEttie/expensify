import * as firebase from 'firebase';

// <script src="https://www.gstatic.com/firebasejs/5.3.1/firebase.js"></script>
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

// database
//   .ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     console.log(snapshot.val());
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   })
//   .catch(e => {
//     console.log(e);
//   });

// database.ref('expenses').on(
//   'value',
//   snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   },
//   e => {
//     console.log(e);
//   }
// );

// database.ref('expenses').push({
//   description: 'test 1',
//   note: 'note 1',
//   amount: 199,
//   createdAt: 0
// });
// database.ref('expenses').push({
//   description: 'test 2',
//   note: 'note 2',
//   amount: 299,
//   createdAt: 0
// });
// database.ref('expenses').push({
//   description: 'test 3',
//   note: 'note 3',
//   amount: 399,
//   createdAt: 0
// });

// database
//   .ref()
//   .set({
//     name: 'Etienne Landman',
//     age: 35,
//     stressLevel: 6,
//     job: {
//       title: 'software developer',
//       company: 'google'
//     },
//     isSingle: false,
//     location: {
//       city: 'Cape Town',
//       country: 'South Africa'
//     }
//   })
//   .then(() => {
//     console.log('Data has been created!');
//   })
//   .catch(e => {
//     console.log('ERROR - ', e);
//   });

// database
//   .ref()
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log('ERROR retrieving data', e);
//   });

// database.ref('age').set(36);
// database.ref('location/city').set('Not Sure');

// database
//   .ref('attributes')
//   .set({
//     height: 186,
//     weight: 100
//   })
//   .then(() => {
//     console.log('attributes has been set');
//   })
//   .catch(e => {
//     console.log('ERROR - attributes has not been set', e);
//   });

// database
//   .ref('isSingle')
//   .set(null)
//   .then(() => {
//     console.log('isSingle has been removed');
//   })
//   .catch(e => {
//     console.log('ERROR - isSingle has not been removed', e);
//   });

// database
//   .ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('isSingle has been removed');
//   })
//   .catch(e => {
//     console.log('ERROR - isSingle has not been removed', e);
//   });

// database
//   .ref()
//   .update({
//     age: 36
//   })
//   .then(() => {
//     console.log('age has been updated');
//   })
//   .catch(e => {
//     console.log('ERROR - age could not be updated', e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'amazon',
//   'location/city': 'Johannerburg',
//   isSingle: null
// })
