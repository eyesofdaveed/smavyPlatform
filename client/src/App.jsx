import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import MainLayout from './MainLayout.jsx';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <translate>
          <MainLayout />
        </translate>
      </BrowserRouter>
    </>
  );
};

export default App;
