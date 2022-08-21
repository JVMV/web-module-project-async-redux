import React from 'react';
import './App.css';
import GetUnbored from './getUnbored';
import { connect } from 'react-redux';
import ActivityList from './ActivityList';

function App(props) {
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
      <ActivityList />
    </div>
  );
}

export default connect(st => st)(App);