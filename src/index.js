import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
firebase.initializeApp( {
  apiKey: "AIzaSyAhGEwtRFrwOGds5fRRwuvN2D3gLhhTYy8",
  authDomain: "chat-react-b7d11.firebaseapp.com",
  projectId: "chat-react-b7d11",
  storageBucket: "chat-react-b7d11.appspot.com",
  messagingSenderId: "640554286839",
  appId: "1:640554286839:web:62b467dd9e9ec772449df2"
} );

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);