import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdqnSIVE7VOsqX_bEVdjRppetsXw7jPHU",
  authDomain: "skunks-5707a.firebaseapp.com",
  projectId: "skunks-5707a",
  storageBucket: "skunks-5707a.appspot.com",
  messagingSenderId: "857674291843",
  appId: "1:857674291843:web:94fa2b87dcb991230a99b6",
  measurementId: "G-W6CDQTMKN8"
};


let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
const auth = firebase.auth()

export {auth};