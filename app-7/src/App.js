import {Component} from 'react';
import NewTask from './Components/NewTask'
import List from './Components/List'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoArr: [],
    }
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task) {
    this.setState({
      todoArr: [...this.state.todoArr, task]
    });
  }
  
  render() {
    return (
      <section className="App-header">
        <h1>My To-Do List:</h1>
        <NewTask addTask={this.handleAddTask} />
        <List arr={this.state.todoArr} />
      </section>
    );
  }
}

export default App;
