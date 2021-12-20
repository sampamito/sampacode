// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase";
//import { getAnalytics } from "firebase/analytics";
//import {firebase} from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import "firebase/compat/functions";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig  = {
  apiKey: "AIzaSyBj4bQLPVx-Cfh6Wmbs1qlzihUjaHEaHiU",
  authDomain: "modulo-11-react-firebase.firebaseapp.com",
  projectId: "modulo-11-react-firebase",
  storageBucket: "modulo-11-react-firebase.appspot.com",
  messagingSenderId: "823268879675",
  appId: "1:823268879675:web:c8fbd2f8385f57c15f9b1e",
  measurementId: "G-WXTFCVLWZE"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export {db, auth, storage, functions};