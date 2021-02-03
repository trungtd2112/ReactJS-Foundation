
import './App.css';





import React, { Component } from 'react';
import NoiDung from './NoiDung';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangThai : "khoiTao",
      trangThai2 : "trangThai 2"
    }
  }
  
  
  componentWillMount() {
    console.log("componentWillMount OK");
  }
  
  componentDidMount() {
    console.log("componentDidMount OK");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate OK");
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate OK");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate OK");
  }
  
  capNhatState = () => {
    this.setState({
      trangThai : "trangThai dc update",
      trangThai2 : "trang thai 2 da ok nha"
    })
  }
  
  

  render() {
    console.log("render OK");
    console.log("state trong render: "+ this.state.trangThai);
    return (
      <div className="App">
        <button type="button" className="btn btn-primary" onClick={() => this.capNhatState()}>Cap nhat state</button>
        <NoiDung ten={this.state.trangThai2}></NoiDung>
      </div>
    );
  }
}

export default App;
