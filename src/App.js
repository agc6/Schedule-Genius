import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Import BrowserRouter and Route
import LandingPage from './components/LandingPage'; // Import LandingPage
import SignUpPage from './components/SignUpPage'; // Import SignUpPage

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/signup" component={SignUpPage} />
      </div>
    </Router>
  );
}

export default App;
