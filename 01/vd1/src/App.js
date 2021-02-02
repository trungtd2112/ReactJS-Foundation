import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

function One(){
  return (
    <div>
      <h1>Cach so 1</h1> 
      <h2>Cach so 2</h2>
    </div>
  )
}

var Two = function(){
  return(

    <div>
      <h3>
        ahihi
      </h3>
    </div>
  );
}

var Three = () => (
  <div>
    anh yeu em
  </div>
);

class Four extends Component {
  render() {
    return (
      <div>
        <button type="button" class="btn btn-outline-primary">anh yeu em</button>
      </div>
    );
  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <One></One>
        <Two></Two>
        <Three></Three>
        <Four></Four>
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

export default App;
