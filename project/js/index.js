// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';
import 'bootstrap';
import '../css/project.scss';
import configureStore from './redux/store';

const store = configureStore();

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'));
