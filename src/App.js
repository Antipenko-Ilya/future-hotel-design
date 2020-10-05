import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage';
import Contacts from './Components/MainPage/Contacts/Contacts';
import Projects from './Components/Projects/Projects';
import Project from './Components/Project/Propject';
import Stages from './Components/Stages/Stages';
import Team from './Components/Team/Team';
import Approach from './Components/Approach/Approach';
import './App.css';

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>setLoading(false), 2000)
  }, [0])

  return (
    <Router>
    { loading && <div className='Preloader'/> }
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

          <Route path='/project'>
            <Project />
          </Route>

          <Route path='/stages'>
            <Stages />
          </Route>

          <Route path='/team'>
            <Team />
          </Route>
          <Route path='/approach'>
            <Approach />
          </Route>
        </Switch>
        <Contacts/>
      </div>
    </div>
    </Router>
  );
}

export default App;
