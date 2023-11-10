import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Flexbox, Title, Text } from '@atoms';

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
        <Title>404</Title>
        <Text color={"#000"} fontSize={"32px"} fontWeight={"600"}>Not found</Text>
        <Text color={"#000"} fontSize={"18px"}>
          Эта страница недоступна. <br /> Вернитесь на{' '}
          <Link to="/">главную страницу</Link> нашего сайта.
        </Text>
      </Flexbox>
    </NotFoundWrapper>
  );
};

export default NotFoundPage;