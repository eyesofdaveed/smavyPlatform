import React from 'react';
import styled from 'styled-components';

import { Flexbox } from '../../atoms/Flexbox';

// @Move styles to styled-components, and remove css file
import './index.css';

const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <Flexbox direction="column" align="center">
        <p className="notFoundPageTitle">404</p>
        <p className="notFoundPageSubTitle">Not found</p>
        <p className="notFoundPageText">
          Эта страница недоступна. <br /> Вернитесь на{' '}
          <a href="/">главную страницу</a> нашего сайта.
        </p>
      </Flexbox>
    </NotFoundWrapper>
  );
};

export default NotFoundPage;
