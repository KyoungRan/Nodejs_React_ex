import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import the Routes component, which containers our Route setup
import { Routes } from './Routes';
// Provider component is a react-redux component for setting up the Redux Store
import { Provider } from 'react-redux';
// import the ConfigureStore that holds the initial Configuration
import { configureStore } from './store/configureStore';
import * as TodoActions from './todos/actions/todoActions';
import AppBar from 'material-ui/AppBar';

// Create a Store from the Configuration, we can pass a Initial State here
const store = configureStore();

// At first dispatch a Get Todos Actions, So we'll recieve the Todos
// fetched from the server at the start of the app
store.dispatch(TodoActions.GetTodos());

class App extends Component {
  render() {
    return (
      // Provider needs to container all the Containers/Components it will five access to the Store
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
