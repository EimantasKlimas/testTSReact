import React from 'react';
import logo from './logo.svg';
import './App.css';

import {PostFrame} from "./components/postFrame"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <PostFrame/>
      </header>
    </div>
  );
}

export default App;
