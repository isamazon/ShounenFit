import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// Main pages
import Home from './Home';
import Dashboard from './components/dashboard/dashboard';
import AnimeSelection from './components/animes/animeselection';
import Login from './components/login/login';
import AdminLogin from './components/admin/adminlogin';
function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/animeselection" component={AnimeSelection} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/adminlogin" component={AdminLogin} />
      </Switch>
    </div>
  );
}

export default App;
