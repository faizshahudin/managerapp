/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import Router from './Router';


export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA8iW2evGnSjcip_8ALJAu8-T9jXW9PqPI',
      authDomain: 'manager-react-native-8b726.firebaseapp.com',
      databaseURL: 'https://manager-react-native-8b726.firebaseio.com',
      projectId: 'manager-react-native-8b726',
      storageBucket: 'manager-react-native-8b726.appspot.com',
      messagingSenderId: '99195697839'
    };

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
