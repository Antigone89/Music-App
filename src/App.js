import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AlbumList from './Components/AlbumList'
import React, { Component, useState } from 'react';
import Searchbar from './Components/Searchbar';
import Navigationbar from './Components/Navigationbar';
import RegistrationScreen from './Components/RegistrationScreen';
import AlbumDetails from './Components/AlbumDetails'
import { MusicProvider } from './Components/MusicContext';
import { AuthProvider } from './context/AuthContext';
import Login from './Components/Login';

/*
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
 //your config 
})


const auth = firebase.auth();
const firestore = firebase.firestore();
*/

function App() {


  return (
   
    <BrowserRouter>
      <AuthProvider>
      <MusicProvider>
        
    <div className="App">
        <header className="App-header"> 
              < Navigationbar />
     
          <Switch>
            <Route exact path="/searchbar" component={Searchbar}>
            </Route>
            <Route exact path="/login" component={Login}>
            </Route>
            <Route exact path="/registration" component={RegistrationScreen} >
            </Route>  
            <Route exact path="/" component={AlbumList}>
            </Route>
          </Switch>
        </header>
        </div>
        </MusicProvider>
        </AuthProvider>
      </BrowserRouter>
  );
}

export default App;
