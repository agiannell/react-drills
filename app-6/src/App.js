import {Component} from 'react';
import Todo from './Components/Todo'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todoArr: [],
      userInput: ''
    }
  }

  handleInput(e){
    this.setState({userInput: e})
  }

  handleClick(e) {
    e.preventDefault()

    const arrCopy = this.state.todoArr.slice();
    arrCopy.push(this.state.userInput);

    this.setState({
      todoArr: arrCopy,
      userInput: ''
    })
  }
  
  render(){
    return(
      <div className="App">
        <h1>My to-do list:</h1>
        <form>
          <input value={this.state.userInput} placeholder="To-Do Item" onChange={e => this.handleInput(e.target.value)} />
          <button onClick={e => this.handleClick(e)}>Add</button>
        </form>
        {this.state.todoArr.map((e, i) => {
          return <Todo key={i} todo={e} />
        })}
      </div>
    );
  }
}

export default App;
