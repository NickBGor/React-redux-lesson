import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {forbidenWordsMiddleWare} from "./redux/middleware";

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk,
        forbidenWordsMiddleWare
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
