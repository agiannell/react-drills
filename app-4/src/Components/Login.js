import {Component} from 'react';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            usernameInput: '',
            passwordInput: ''
        }
    }

    handleChange1(e){
        this.setState({usernameInput: e.target.value})
    }

    handleChange2(e){
        this.setState({passwordInput: e.target.value})
    }

    handleClick(){
        alert(`Username: ${this.state.usernameInput} Password: ${this.state.passwordInput}`)
    }

    render(){
        return(
            <section className="input">
                <input placeHolder="username" onChange={e => this.handleChange1(e)} />
                <input placeHolder="password" onChange={e => this.handleChange2(e)}/>
                <button onClick={e => this.handleClick(e)}>Login</button>
            </section>
        );
    }
}

export default Login;