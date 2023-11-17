import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import { Auth } from './pages/Auth.jsx';


const App = () => {
  return (
    <>
      <BrowserRouter>
          <Auth />
      </BrowserRouter>
    </>
  );
};
 
export default App;
