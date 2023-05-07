import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faAdjust } from '@fortawesome/free-solid-svg-icons'
//imports

library.add(faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faAdjust )

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
