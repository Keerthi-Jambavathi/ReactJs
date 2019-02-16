import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {

  state={
    name:"Keet"
  }
  changeNameHandler=(event)=>{
    this.setState({name:event.target.value})
  }


  render() {
    return (
      <div className="App">
        <UserInput click={this.changeNameHandler} currentName={this.state.name}/>
        <UserOutput username={this.state.name}/>
      </div>
    );
  }
}

export default App;
