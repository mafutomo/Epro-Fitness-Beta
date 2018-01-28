import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Account from './components/account.js'
import Hormones from './components/hormones.js'
import Login from './components/login.js'
import Main from './components/main.js'
import Navbar from './components/navbar.js'
import Userbase from './components/userbase.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleToggle = () => {
    this.setState({open: !this.state.open})
  };

  render() {
    return (
      <div className="App">

        <MuiThemeProvider>

        <Navbar
          open = {this.state.open}
          handleToggle = {this.handleToggle}/>
        <Account/>
        <Hormones/>
        <Login/>
        <Main/>
        <Userbase/>

        </MuiThemeProvider>


      </div>
    );
  }
}

export default App;
