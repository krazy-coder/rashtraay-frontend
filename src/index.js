import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'
import memlogreducer from './Store/reducers/memlogreducer'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

const composeEnhancers = process.env.NODE_ENV==='development'?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null || compose;

const rootReducer=combineReducers({
  memlog:memlogreducer
})

const store=createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
   <BrowserRouter>
    <App />
   </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
