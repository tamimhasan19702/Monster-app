import React from "react";
import '../src/App.css';
import CardList from "./Components/CardLlist/CardList.component";
class App extends React.Component {
  constructor (){
    super();

    this.state = {
      Monstars: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ Monstars: users}));
  }



  render(){
     return(
       <div className="App">
        <CardList name="Tamim"/>
        hello
       {this.state.Monstars.map(mon => <h1 key={mon.id}> { mon.name } </h1>)}
       </div>
     )
  }
}


export default App