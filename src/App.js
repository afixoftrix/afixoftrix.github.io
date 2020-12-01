import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Navigation } from './Components/Navigation';
import { About } from './Pages/About';
import { Home } from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;