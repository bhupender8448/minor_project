// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9jfpsVlFFiTZC4o3TgY9T_dGX6_3htxU",
  authDomain: "helloworld-19dc3.firebaseapp.com",
  projectId: "helloworld-19dc3",
  storageBucket: "helloworld-19dc3.appspot.com",
  messagingSenderId: "852106547624",
  appId: "1:852106547624:web:a0ae0ae64a37d563bfcd9d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users: firestore.collection('users'), 
    getTimeStamp: firebase.firestore.FieldValue.getTimeStamp
}

export const storage = firebase.storage();