import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

function NumberOne(props){
  return (
    <h2>{props.title}</h2>
  )
}

//su dung class de thao tac voi props
class NumberTwo extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <img src={this.props.linkanh}></img> 
        </div>
    );
  }
}

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
        <NumberOne title = "anh trung dz"></NumberOne>
        <NumberTwo title = "anh Trung dz" linkanh = "https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/1/27/sontungchinhthuctungmvchungtacuahientaie18be2c0-161173682811058447996.jpg"></NumberTwo>
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
