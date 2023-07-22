import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app/app';
import { offerCards } from './mock-data';

ReactDom.render(
  <App offerCards={offerCards} />,
  document.getElementById(`root`),
);
