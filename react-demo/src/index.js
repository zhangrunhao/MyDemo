import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App'; 
// import IntroducingJSX from './IntroducingJSX' 
// import RenderElements from './RenderingElements'

import ComponentsAndProps from './quick-start/ComponentsAndProps'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ComponentsAndProps />, document.getElementById('root'));

registerServiceWorker();
