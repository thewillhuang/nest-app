import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();


const mount = (node, props) => {
  ReactDOM.render(<App {...props} />, node);
}
if (window.ConstructionOS) {
  window.ConstructionOS.Applications.NestCam = {
    mount: mount
  };
}
else {
  ReactDOM.render(<App />, document.getElementById("root"));
}
