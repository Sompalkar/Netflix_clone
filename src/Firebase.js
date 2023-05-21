
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

 

const firebaseConfig = {
    apiKey: "AIzaSyAX6MRJkrybMZ19ZMjhTHU-TFhSBBP7k5Q",
    authDomain: "netflixclone-4e65d.firebaseapp.com",
    projectId: "netflixclone-4e65d",
    storageBucket: "netflixclone-4e65d.appspot.com",
    messagingSenderId: "820640990986",
    appId: "1:820640990986:web:b1b0f72ffef5343e78dcf3"
  };

























const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

export default db;