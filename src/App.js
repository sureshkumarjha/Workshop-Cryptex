import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'tachyons';
import Login from './component/Login';
import Home from './component/Home';
class App extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLogin: false,
      error: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({
      email: event.target.value
    }
    )
  }
  onPasswordChange = (event) => {
    this.setState({
      password: event.target.value
    }
    )
  }

  onLoginClick = () => {
    console.log(this.state);
    if (this.state.email.length == 0 || this.state.password.length == 0) {
      this.setState({
        error: <p className='red'>Fill all details</p>
      }
      )
    } else {
      fetch('http://localhost:4000/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json', 
        },
          body: JSON.stringify({
            username: this.state.email,
            passwd: this.state.password
        })
      }).then(response => response.json())
      .then(data => {
        console.log(data.state);
        if (data.state == true) {
          this.setState({
            isLogin: true
          })
        } else {
          alert('User not Found');
        }
      })
    }

  }
  onLogout = () => {
    this.setState({
      isLogin: false,
      error: ''
    }
    )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {(this.state.isLogin) ?
            <Home d={this.onLogout} />
            :
            <div>
              <img src={logo} className="App-logo " alt="logo" />
              <Login
                a={this.onEmailChange}
                b={this.onPasswordChange}
                c={this.onLoginClick}
                error={this.state.error}
              />
            </div>
          }
        </header>
      </div>
    )
  }

}

export default App;
