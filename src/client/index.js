import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import Root from './containers/Root'
import configureStore from './store/configureStore'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './stylesheets/index.css'

const store = configureStore()

ReactDOM.render(
    <Router>
        <Root store={store} />
    </Router>, document.getElementById('root'));
registerServiceWorker();