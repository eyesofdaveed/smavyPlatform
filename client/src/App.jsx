import React from 'react';
import {Route, Routes} from 'react-router-dom'

import Login from './pages/Login';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Login />} />
    </Routes>
    </>
  );
};

export default App;
