import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app/app';
import { rooms } from './components/mock-data';

ReactDom.render(
  <App rooms={rooms} />,
  document.getElementById(`root`),
);
