import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyBQWZJvA21FoV63dyGg58d2_zWmIzgV1N4",
    authDomain: "note-f977e.firebaseapp.com",
    databaseURL: "https://note-f977e-default-rtdb.firebaseio.com",
    projectId: "note-f977e",
    storageBucket: "note-f977e.appspot.com",
    messagingSenderId: "675968495630",
    appId: "1:675968495630:web:efc9e3eb8afa6f554b0c5f",
    measurementId: "G-VM9HC6GPXT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const fbData = firebase.database().ref('note');
  export default fbData;
