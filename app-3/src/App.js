import {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      nflTeams: ['49ers', 'bears', 'bengals', 'bills', 'broncos', 'browns', 'buccaneers', 'cardinals', 'chargers', 'chiefs', 'colts', 'cowboys', 'dolphins', 'eagles', 'falcons', 'giants', 'jaguars', 'jets', 'lions', 'packers', 'panthers', 'patriots', 'raiders', 'rams', 'ravens', 'saints', 'seahawks', 'steelers', 'texans', 'titans', 'vikings', 'washington football team'],
      userInput: ''
    }
  }

  handleInput(e){
    this.setState({
      userInput: e.target.value
    })
  }

  
  render(){
    let nflTeams = this.state.nflTeams
      .filter(e => e.includes(this.state.userInput))
      .map((e, i) => <h3 key={i}>{e}</h3>)
    return(
      <section className="App">
        <input onChange={e => this.handleInput(e)} type="text" />
        {nflTeams}
      </section>
    );
  }
}

export default App;
