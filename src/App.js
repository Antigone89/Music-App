import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import FetchApi from './Components/FetchApi'
import MusicList from './Components/MusicList';
import React, { Component } from 'react';
import Searchbar from './Components/Searchbar';
import Navigationbar from './Components/Navigationbar';
import Blog from './Components/Blog';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <header className="App-header">
          < FetchApi />
   {/*       < MusicList/>
          < Searchbar />
          < Navigationbar/>
          < Blog /> */}
  
      </header>
      </div>
      </BrowserRouter>
  );
}

export default App;
