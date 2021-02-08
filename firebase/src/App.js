import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import fbConnect from './firebaseConnect';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


class App extends Component {


  pushData = () => {
    var connectData = firebase.database().ref('note');
    connectData.push({
      title : "ghi so ne`",
      content : "noi dung hihi ne`"
    })
    console.log("anh Turng dz");
  }

  deleteData = (id) => {
    var connectData = firebase.database().ref('note');
    connectData.child(id).remove();
    console.log("anh Turng dz: id = "+id);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => this.pushData()}>Ấn vô đây điiiii</button>
          <button onClick={() => this.deleteData("MSzn69S4VfImd9-sJ9s")}>Đừng ấn vô. Dame Yamete</button>
        </header>
      </div>
    );
  }
}


export default App;
