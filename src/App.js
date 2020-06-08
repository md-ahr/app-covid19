import React from 'react';
import Dashboard from './components/dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Country from './components/country';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/countries/:country" component={Country} />
      </Switch>
    </Router>
  );

};

export default App;
