import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './shared/header'
import Search from './pages/Search'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
 

function App() {
  return (
    <Router>
      <div className="App">
           
              <Header></Header>
              
              <Route path="/search/:keyword" component={Search}/>
           
      </div>
    </Router>
   
   
  );
}

export default App;
