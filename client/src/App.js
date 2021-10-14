import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// Main pages
import Home from './Home';
import Dashboard from './components/dashboard/dashboard';
function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
