import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


class App extends Component {
  render() {
    var redux = require('redux');
    var oldState = {
      num: ["manHinh", "chuot", "banPhim"],
      editStatus: true
    }


    const nameInitialState = {}
    const name = (state = nameInitialState, action) => {
      switch (action.type) {
        case ACTION_TYPE_1:
          return state
        case ACTION_TYPE_2:
          return state
        default:
          return state
      }
    }

    var reducer01 = (state = oldState, action) => {
      switch (action.type) {
        case "CHANGE_EDIT_STATUS":
          return { ...state, editStatus: !state.editStatus }
        case "ADD_ITEM":
          return { ...state, num: [...state.num, action.newItem] }
        case "DELETE":
          return { ...state, num: [...state.num.filter((value, key) => key !== action.index)] }
        default:
          break;
      }
      return state;
    }
    var store01 = redux.createStore(reducer01);
    store01.subscribe(() => {
      console.log("state thay doi");
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
