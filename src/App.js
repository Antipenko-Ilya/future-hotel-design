import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage';
import Contacts from './Components/Contacts/Contacts';
import Projects from './Components/Projects/Projects';
import Stages from './Components/Stages/Stages';
import Team from './Components/Team/Team';
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
            <Projects />
          </Route>

          <Route path='/stages'>
            <Stages />
          </Route>

          <Route path='/team'>
            <Team />
          </Route>

          <Route path='/contacts'>
            <Contacts />
          </Route>

        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
