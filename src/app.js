import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';

import 'normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

import { startSetExpenses } from './actions/expenses';
import { login, logOut } from './actions/auth';

import { firebase } from './firebase/firebase';

import LoadingPage from './components/LoadingPage';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('appRoot'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('appRoot'));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname == '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logOut());
    renderApp();
    history.push('/');
  }
});
