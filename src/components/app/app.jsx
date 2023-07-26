
import React from 'react';
import MainPage from '../main-page/main-page';
import { rooms } from "../mock-data";
import { menuUpArray } from "../mock-data";

const App = () => {
  return (
    <>
      <MainPage menuUpArray={menuUpArray} rooms={rooms} />
    </>
  );
};

export default App;
