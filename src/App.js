import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Chat from './components/Chat';
import Join from './components/Join';


function App() {
  return (
    <div>
      <h1>This is APP</h1>
      <Router>
        <Route path='/' exact component={Join} />
        <Route path='/chat' component={Chat} />
      </Router>
    </div>
  );
}

export default App;
