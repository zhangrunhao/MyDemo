import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import './index.css';

// import App from './App';

import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
class HellowMessage extends Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    )
  }
}
ReactDOM.render(
  <HellowMessage name="zhang" />,
  document.getElementById('root')
)

registerServiceWorker();
