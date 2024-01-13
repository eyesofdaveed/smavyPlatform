import React, { useState } from 'react'
import styled from 'styled-components';

import Sidebar from '@organism/Sidebar';
import RightBar from '@organism/RightBar';
import HeaderMenu from '@organism/HeaderMenu';

const ContentWrapper = styled.div`
  margin-left: 328px;
  // margin-right: 320px;
  padding: 150px 80px 100px 80px;
  transition: 0.5s;

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
  const [isRightBarClosed, setIsRightBarClosed] = useState(false);

  return (
    <>
      <Sidebar />
      <HeaderMenu />
      <RightBar isClosed={isRightBarClosed} toggleRightBar={() => setIsRightBarClosed(prev => !prev)} />
      <ContentWrapper style={{ marginRight: isRightBarClosed ? '0px' : '320px' }}>
        {children}
      </ContentWrapper>
    </>
  );
};

export default MainLayout;