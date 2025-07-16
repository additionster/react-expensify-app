import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBmywBWpo6cqIjXCk9LaICpmOpcfdyyQkQ",
  authDomain: "expensify-f410c.firebaseapp.com",
  databaseURL: "https://expensify-f410c-default-rtdb.firebaseio.com",
  projectId: "expensify-f410c",
  storageBucket: "expensify-f410c.firebasestorage.app",
  messagingSenderId: "518900585056",
  appId: "1:518900585056:web:20654e5be01e9290056905",
  measurementId: "G-FER9M96X0X"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);