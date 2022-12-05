import React, { Component } from "react";
import '../src/App.css';
import logo from './App.css';

class App extends Component {
  constructor (){
    super();

    this.state = {
      Monstars: [
        { name: 'Frankestine'},
        { name: 'Dracula'},
        { name: 'Zombie'},
      ]
    }
  }



  render(){
     return(
       <div className="App">
      
       </div>
     )
  }
}


export default App