import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app/app';

import rooms from './mock/mock-rooms';
import reviews from './mock/mock-reviews';
import cities from './mock/mock-cities';
import propertyInside from './mock/mock-property-inside';
import menuUpArray from './mock/mock-menu';
import loginName from './mock/mock-login';

ReactDom.render(
  <App
    rooms={rooms}
    reviews={reviews}
    cities={cities}
    propertyInside={propertyInside}
    menuUpArray={menuUpArray}
    loginName={loginName}
  />,
  document.getElementById(`root`),
);
