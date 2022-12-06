import React from "react";
import '../src/App.css';
import CardList from "./Components/CardLlist/CardList.component";
class App extends React.Component {
  constructor (){
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ monsters: users}));
  }



  render(){
     return(
       <div className="App">
        <CardList monsters={this.state.monsters} />  
       </div>
     )
  }
}


export default App