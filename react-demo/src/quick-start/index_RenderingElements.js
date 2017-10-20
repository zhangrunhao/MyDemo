import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import IntroducingJSX from './IntroducingJSX'
// import RenderElements from './RenderingElements'
import registerServiceWorker from './registerServiceWorker';

function click() {
  const element = (
    <div>
      <h1>Hello World</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  )
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(click, 1000)



registerServiceWorker();
