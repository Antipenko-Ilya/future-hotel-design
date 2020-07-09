import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="container">
        <Header/>
        <Switch>
          
          <Route exact path='/'>
            <MainPage/>
          </Route>

          <Route path='/projects'>
            
          </Route>

          <Route path='/stages'>
            
          </Route>

          <Route path='/team'>
            
          </Route>

          <Route path='/contacts'>
            
          </Route>

        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
