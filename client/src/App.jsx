import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import { Registration } from './pages/Registration';
import NotFoundPage from './pages/NotFoundPage';

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
