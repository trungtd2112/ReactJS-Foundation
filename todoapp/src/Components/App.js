import React, { Component } from 'react';
import Nav from './Nav';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import fbData from './firebaseConnect.js';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  addData = (item) => {
    fbData.push(item);
  }

  render() {
    // fbData.once('value').then(function(snapshot){
    //   console.log(snapshot.val());
    // })
    return (
      <div>
        <Nav></Nav>
        <div className="container">
          <div className="row">
            <NoteList></NoteList>
            <NoteForm getData={(item)=>this.addData(item)}></NoteForm>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
