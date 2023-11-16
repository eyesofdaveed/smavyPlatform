import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import NotFoundPage from './pages/404/404';
import PasswordReset from './pages/PasswordReset';

import { Registration } from './pages/Registration';
import NotFoundPage from './pages/NotFoundPage';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Login />} />
        <Route path="/password-reset" element={<PasswordReset/>}></Route>

        <Route path="/registration" element={<Registration />} />

      </Routes>
    </>
  );
};
 
export default App;
