import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app/app';
import rooms from './mock/mock-rooms';

ReactDom.render(
  <App rooms={rooms} />,
  document.getElementById(`root`),
);
