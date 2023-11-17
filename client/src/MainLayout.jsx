import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Sidebar from './organism/Sidebar';
import HeaderMenu from './organism/HeaderMenu';

import './index.css';

const MainLayout = () => {
  return (
    <div style={{ }}>
      <Sidebar /> 
      <HeaderMenu />
      <div style={{ width: '100%', height:'150vh', background:'#ccc' }}>
        {/* <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
        </Routes> */}
      </div>

    </div>
  );
};

export default MainLayout;


