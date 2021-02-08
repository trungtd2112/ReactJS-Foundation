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

export const fbConnect = firebase.initializeApp(firebaseConfig);
// var data = firebase.database().ref('note/note1');
// data.once('value').then(function (snapshot) {
//   console.log(snapshot.val());
// })
// data.set({
//   id: 200,
//   title: "anh yeu em1",
//   content: "hixhix"
// }).then(success => {
//   console.log('success', success);
// },
//   error => {
//     console.log('error', error);
//   }
// );