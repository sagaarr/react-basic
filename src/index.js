import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Card from './Card'
import 'tachyons'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
