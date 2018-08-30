import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Redirect} from  'react-router-dom';
import Login from './user/login';
import Register from './user/register';

class App extends Component {
  render() {
    return (
      
      <Router><div className="App">
          <Route exact path="/" render={() => (<Redirect to="/login" />)} />
          <Route path="/login" exact strict component={Login} />

          
          <Route path="/register" exact strict component={Register} />
          


        </div>
        </Router>
      
    );
  }
}

export default App;
