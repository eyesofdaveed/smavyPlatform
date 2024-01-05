import React from 'react';
import styled from 'styled-components';

import HeaderMenu from './organism/HeaderMenu';
import Sidebar from './organism/Sidebar';

const ContentWrapper = styled.div`
  margin-left: 328px;
  padding: 150px 40px 100px 80px;

  @media screen and (max-width: 850px) {
    margin-left: 20px;
    padding: 120px 50px 80px 50px;
  }
  @media screen and (max-width: 450px) {
    margin-left: 20px;
    padding: 100px 30px 80px 30px;
  }
`;

const MainLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <HeaderMenu />
      <ContentWrapper> {children} </ContentWrapper>
    </>
  );
};

export default MainLayout;
