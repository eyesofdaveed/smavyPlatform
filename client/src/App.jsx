import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import MainLayout from './MainLayout.jsx';

import Login from './pages/Login';

import { Registration } from './pages/Registration';
import NotFoundPage from './pages/NotFoundPage';


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
