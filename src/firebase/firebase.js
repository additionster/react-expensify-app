import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, set, ref, remove, update, get, onValue, push } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DB_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const schema = 'expenses';
// set(ref(db, 'users/user1'), {
//     name: "PKT",
//     age: 35,
//     isSingle: false,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'ACE'
//     },
//     location: {
//         city: 'Yangon',
//         country: 'Myanmar'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((error) => {
//     console.error('error: ', error);
// });

//update
//set(ref(db, 'users/user1/age'), 36);

//add new
// set(ref(db, 'users/user1/attributes'), {
//     "height": 176,
//     "weight": 70
// }).then(() => {
//     console.log('Data is saved.');
// }).catch((error) => {
//     console.error('error: ', error);
// });

//Remove data
// remove(ref(db, 'users/user1/isSingle'))
//     .then(() => {
//         console.log('isSingle is removed!');
//     }).catch((error) => {
//         console.error('error: ', error);
//     });

//Update data
/*
update(ref(db, 'users/user1'), {
    name: 'Phyo Kyaw Thu',
    age: 36,
    job: 'Software Developer',
    'attributes/weight': 71
});
*/

// update(ref(db, 'users/user1'), {
//     stressLevel: 9,
//     'job/company': 'NCS',
//     location: {
//         country: 'Singapore'
//     }
// });

//Read value once
// get(ref(db, 'users/user1'))
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((error) => {
//         console.error('error: ', error);
//     });

//Read on every value change in DB using listener callback
// const onValueChange = onValue(ref(db, 'users/user1'), (snapshot) => {
//     console.log('value change: ', snapshot.val());
// }, (error) => {
//     console.error('error: ', error);
// });

//Call the function again to remove the listener
//onValueChange();

// onValue(ref(db, 'users/user1'), (snapshot) => {
//     console.log(`${snapshot.val().name} is ${snapshot.val().job.title} at ${snapshot.val().job.company}`);
// });

// setTimeout(() => {
//     update(ref(db, 'users/user1'), {
//         name: 'Phyo Kyaw Thu'
//     });
// }, 1500);

// push(ref(db, 'users/user2'), {
//     title: 'To Do',
//     body: 'Go for a run'
// });

// import { expenses } from '../test/fixtures/expenses';
// expenses.forEach((expense) => {
//     push(ref(db, 'expenses'), expense);
// });

// get(ref(db, 'expenses'))
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     })
//     .catch((error) => {
//         console.error('error: ', error);
//     });

//run on every value change
// onValue(ref(db, 'expenses'), (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });