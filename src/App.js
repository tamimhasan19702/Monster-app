import React from "react";
import '../src/App.css';
import CardList from "./Components/CardLlist/CardList.component";
import SearchBox from "./Components/Search-box/Search-box.component";
class App extends React.Component {
  constructor (){
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }

    
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ monsters: users}));
  }

  handleChange = (e) =>{
    this.setState({ searchField: e.target.value})
  }


  render(){

    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

     return(
       <div className="App">
        
        <SearchBox 
        placeholder='search-monster'
        handleChange={this.handleChange}/> 

        <CardList 
        monsters={filteredMonsters} />  
       </div>
     )
  }
}


export default App