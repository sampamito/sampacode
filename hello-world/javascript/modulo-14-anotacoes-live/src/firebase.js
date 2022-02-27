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
    apiKey: "AIzaSyAFi3_o1DPVyLcQWvEcy3YGqaL2IgBhLGY",
    authDomain: "modulo-14-anotacoes-live.firebaseapp.com",
    projectId: "modulo-14-anotacoes-live",
    storageBucket: "modulo-14-anotacoes-live.appspot.com",
    messagingSenderId: "354253688227",
    appId: "1:354253688227:web:102f56870fe20bbe52de16"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export { db, auth, storage, functions };