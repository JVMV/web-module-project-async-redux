import React from 'react';
import './App.css';
import GetUnbored from './getUnbored';
import { connect } from 'react-redux';

function App() {
  return (
    <div className="App">
      <h1>NeverBored.org</h1>
      <div>
        <p>That rhymes..</p><br />
        <p>Feeling bored? I get it, 
          sometimes you're soo efficient in your work that you have nothing to do.
        </p>
      </div>
      <GetUnbored />
    </div>
  );
}

export default App;