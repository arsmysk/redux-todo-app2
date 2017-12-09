import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

ReactDOM.render((
  <div>
    <Provider store={store} >
      <App />
    </Provider>
  </div>), document.getElementById('root'));
registerServiceWorker();
