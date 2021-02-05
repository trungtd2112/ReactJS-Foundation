import logo from './logo.svg';
import './App.css';
import News from './News';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <News></News>
        </header>
        {this.props.data}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.num
  }
}

export default connect(mapStateToProps)(App);
