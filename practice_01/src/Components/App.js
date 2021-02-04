import React, { Component } from 'react';
import './../App.css';
import AddForm from './AddForm';
import Header from './Header';
import SearchForm from './SearchForm';
import TableData from './TableData';
import data from './Data.json'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      willShowForm : false,
      data : data,
      keyword : ""
    }
  }

  getKeyword = (data) => {
    this.setState({
      keyword : data
    })
  }
  
  changeState = () => {
    this.setState({
      willShowForm : !this.state.willShowForm,
    })
  }
  render() {

    var ketqua = [];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.keyword) !== -1){
        ketqua.push(item)
      }
    })
    console.log(ketqua);

    return (
      <div className="container">
        <Header></Header>
        <div className="row">
            <SearchForm 
              getKeyword = {(data) => this.getKeyword(data)}
              conn={() => this.changeState()} willShowForm = {this.state.willShowForm}></SearchForm>
            <TableData dataUsersProps = {ketqua}></TableData>
            <AddForm willShowForm = {this.state.willShowForm}></AddForm>
        </div>
      </div>
    );
  }
}

export default App;
