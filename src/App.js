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

    const { monsters, searchField } = this.state;
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

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