import React from 'react';
import axios from 'axios';
import './App.css';

import { HashRouter as Router, Route, Link } from "react-router-dom";

// TO DO: import functions from components for routes
import InputFeelings from '../Feelings/Feelings.jsx';
import InputUnderstanding from '../Understanding/Understanding.jsx';
import InputSupport from '../Support/Support.jsx';

function App() {

  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

      
      {/* create pseudo routes for now - 
      feelings is initial route */}
        <Route exact path="/">
          <InputFeelings />
        </Route>
        <Route exact path="/understanding">
          <InputUnderstanding />
        </Route>
        <Route exact path="/support">
          <InputSupport />
        </Route>
        
        {/* <Route exact path="/comments">
          <Comments />
        </Route> */}

        {/* <Route exact path="/review">
          <Review />
        </Route> */}

        {/* <Route exact path="/confirmation">
          <Confirmation />
        </Route> */}

      </Router>

    </div>
  );
}


export default App;