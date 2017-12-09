import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import { Provider } from 'react-redux'
import Home from './components/Home'
import Sub from './components/Sub'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

ReactDOM.render((
  <div>
    <Provider store={store} >
      <App />
    </Provider>
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/sub' component={Sub} />
        <Link to={''}>Home</Link>
        <Link to={'sub'}>Sub</Link>
      </div>
    </Router>
  </div>), document.getElementById('root'));
registerServiceWorker();
