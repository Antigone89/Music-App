import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AlbumList from './Components/AlbumList'
import React, { Component } from 'react';
import Searchbar from './Components/Searchbar';
import Navigationbar from './Components/Navigationbar';
import RegistrationScreen from './Components/RegistrationScreen';
import AlbumDetails from './Components/AlbumDetails'
import { MusicProvider } from './Components/MusicContext';
import { Login } from '.Components/RegistrationScreen';


function App() {
  return (
    <BrowserRouter>
      <MusicProvider>
    <div className="App">
        <header className="App-header"> 
          < Navigationbar />
          <AlbumDetails />
          <Switch>
            <Route exact path="/Searchbar" component={Searchbar}>
            </Route>
            <Route exact path="/" component={AlbumList}>
            </Route>
            <Route exact path="/RegistrationScreen" component={RegistrationScreen}>
            </Route>
      </Switch>
  
      </header>
        </div>
        </MusicProvider>
      </BrowserRouter>
  );
}

export default App;
