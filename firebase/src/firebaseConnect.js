import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


var firebaseConfig = {
  apiKey: "AIzaSyCP_09-wMS67U5cznJ3f6LcM4VK6EztXRE",
  authDomain: "lazy-cdd98.firebaseapp.com",
  databaseURL: "https://lazy-cdd98-default-rtdb.firebaseio.com",
  projectId: "lazy-cdd98",
  storageBucket: "lazy-cdd98.appspot.com",
  messagingSenderId: "849967208443",
  appId: "1:849967208443:web:47544e75a31d7b1e8f5d5e",
  measurementId: "G-D415VDV7ZB"
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