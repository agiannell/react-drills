import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      dataArr: ['This', 'is', 'the', 'Way', '- The Mandalorian']
    }
  }
  
  render() {
    const mappedData = this.state.dataArr.map((e, i) => (
      <h2 key={i}>{e}</h2>
    ))
    
    return (
      <section className="App">
        {mappedData}
    </section>
    );
  }
}

export default App;
