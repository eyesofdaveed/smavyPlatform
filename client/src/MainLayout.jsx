import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';
import Sidebar from './organism/Sidebar';
import HeaderMenu from './organism/HeaderMenu';

const MainLayout = () => {
  return (
    <div style={{ display: 'flex',  }}>
      <Sidebar />
      <HeaderMenu />
      <div style={{ width: '100%', height:'150vh' }}>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>

    </div>
  );
};

export default MainLayout;
