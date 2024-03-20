import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter, Route, and Switch
import LandingPage from './components/LandingPage'; // Import LandingPage
import SignUpPage from './components/SignUpPage'; // Import SignUpPage


const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/signup" component={SignUpPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
