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
const firebaseConfig = {
    apiKey: "AIzaSyBLsP74gyWWjHoQUlldLMyJqNcZKvPa8J0",
    authDomain: "modulo13-live-react-firebase.firebaseapp.com",
    projectId: "modulo13-live-react-firebase",
    storageBucket: "modulo13-live-react-firebase.appspot.com",
    messagingSenderId: "253408111856",
    appId: "1:253408111856:web:520294fc22c60f8290e635"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export { db, auth, storage, functions };