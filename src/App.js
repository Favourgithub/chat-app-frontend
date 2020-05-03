import React from 'react';
import './App.css';
import { Router, Switch } from 'react-router-dom'
import history from './shared/_helpers/history'
import IndexRoute from '../src/routes/IndexRoute'

function App() {
  return (
    <Router history={history}>
      <Switch>
        <IndexRoute />
      </Switch>
    </Router> 
  );
}

export default App;
