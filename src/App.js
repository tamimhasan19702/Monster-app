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
        <input 
        type="Search" 
        placeholder="Search monsters" 
        onChange={e => this.setState({ searchField: e.target.value}, () => console.log(this.state))}
        />
        <CardList monsters={this.state.monsters} />  
       </div>
     )
  }
}


export default App