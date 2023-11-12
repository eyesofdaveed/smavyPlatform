import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import NotFoundPage from './pages/404/404';
import { Registration } from './pages/Registration';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
};

export default App;
