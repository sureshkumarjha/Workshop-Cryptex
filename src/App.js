import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'tachyons';
import Login from './component/Login';
import Home from './component/Home';
class App extends Component {
  constructor(){
    super();
    this.state={
      email : '',
      password : '',
      isLogin : false,
      error:''
    }
  }

  onEmailChange=(event)=>{
    this.setState({
      email : event.target.value
    }
    )
  }
  onPasswordChange=(event)=>{
    this.setState({
      password : event.target.value
    }
    )
  }

  onLoginClick=()=>{
    console.log(this.state);
    if(this.state.email.length==0 || this.state.password.length==0){
      this.setState({
        error : <p className='red'>Fill all details</p>
      }
      )
    }else{
      this.setState({
        isLogin : true
      }
      )
    }

  }
onLogout=()=>{
  this.setState({
    isLogin : false,
    error:''
  }
  )
}
render(){
  return (
    <div className="App">
      <header className="App-header">
        {(this.state.isLogin)?
        <Home d={this.onLogout}/>
        :
        <div>
        <img src={logo}  className="App-logo " alt="logo" />
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
