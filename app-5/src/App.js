import {Component} from 'react';
import Image from './Components/Image'
import './App.css';

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <Image url={'https://i.pinimg.com/736x/a9/61/80/a961809b8de204bdf2fe95ad3451ba81.jpg'} />
      </div>
    );
  }
}
  
export default App;
