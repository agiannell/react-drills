import {Component} from 'react';

class NewTask extends Component {
    constructor() {
        super();
        this.state = {
            userInput: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleInput(e) {
        this.setState({
            userInput: e.target.value
        })
    }

    handleClick() {
        this.props.addTask(this.state.userInput);
        this.setState({
            userInput: ''
        })
    }

    render() {
        return (
            <section>
                <input 
                    value={this.state.userInput} 
                    placeholder="To Do Item" 
                    onChange={e => this.handleInput(e)}
                    />
                <button onClick={this.handleClick}>Add</button>
            </section>
        )
    }
}

export default NewTask