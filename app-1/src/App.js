import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userInput: ''
    }
  }

  handleChange(e){
    this.setState({
      userInput: e
    })
  }

  render(){
    return(
      <section className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        <p>{this.state.userInput}</p>
      </section>
    )
  }
}

export default App;
