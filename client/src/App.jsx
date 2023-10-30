import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Registration from './pages/Registration';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
};

export default App;
