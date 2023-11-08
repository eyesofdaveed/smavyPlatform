import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Flexbox } from '../atoms/Flexbox';
import { colors } from '@base';

const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.p`
  color: ${colors.cardBg};
  font-size: 150px;
  font-weight: bold;

  @media screen and (max-width: 450px) {
    font-size: 90px;
  }
`
const Subtitle = styled.p`
  font-size: 30px;
  font-weight: bold;

  @media screen and (max-width: 450px) {
    font-size: 24px;
  }
`;

const Instruction = styled.p`
  font-size: 18px;

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <Flexbox direction="column" align="center">
        <Title>404</Title>
        <Subtitle>Not found</Subtitle>
        <Instruction>
          Эта страница недоступна. <br /> Вернитесь на{' '}
          <Link to="/">главную страницу</Link> нашего сайта.
        </Instruction>
      </Flexbox>
    </NotFoundWrapper>
  );
};

export default NotFoundPage;