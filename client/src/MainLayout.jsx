import React from 'react';
import styled from 'styled-components';

import Sidebar from './organism/Sidebar';
import HeaderMenu from './organism/HeaderMenu';

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


