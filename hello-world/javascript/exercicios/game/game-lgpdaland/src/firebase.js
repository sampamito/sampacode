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
    apiKey: "AIzaSyCMKbxZbDVXgOIOk1XW-8m7PvEmAq34pjw",
    authDomain: "game-lgpdaland.firebaseapp.com",
    projectId: "game-lgpdaland",
    storageBucket: "game-lgpdaland.appspot.com",
    messagingSenderId: "985203804073",
    appId: "1:985203804073:web:9ec30e2e5b5abd786266b8",
    measurementId: "G-5S0YW2WJWS"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export {db, auth, storage, functions};