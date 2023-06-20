import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ReadableStream } from 'readable-stream';
if (!window.ReadableStream) {
  window.ReadableStream = ReadableStream;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
