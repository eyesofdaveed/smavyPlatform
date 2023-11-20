import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import NotFoundPage from './pages/NotFoundPage'
import Sidebar from './organism/Sidebar';
import HeaderMenu from './organism/HeaderMenu';

const Content = styled.div`
  width: 100%;
  height: 150vh;  
  background: #ccc;
`;
const ContentWrapper = styled.div`
  margin-left: 328px;
  padding: 150px 50px 100px 50px;

  @media screen and (max-width: 850px) {  
    margin-left: 20px;
    padding: 120px 50px 80px 50px;
  }
  @media screen and (max-width: 450px) {
    margin-left: 20px;
    padding: 100px 30px 80px 30px;
  }
`;

const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <HeaderMenu />
      <Content>
        <ContentWrapper>
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ContentWrapper>
      </Content>

    </>
  );
};

export default MainLayout;


