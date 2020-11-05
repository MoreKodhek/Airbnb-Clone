import React from 'react';
import './App.css';
import Home from './home'
import Header from './header'
import Footer from './footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SearchPage from './searchpage'

function App() {
  return (

    // BEM
    <div className="app">
      <Router>
        <Header />
        
        {/*this checks the path that we are in 
        It has to be in this order*/}
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
        <Footer />
      </ Router>
    </div>
  );
}

export default App;