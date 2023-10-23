import React from 'react';
import styled from 'styled-components';

import { colors } from '../base';

const CardContainer = styled.span`
  background-color: ${colors.cardBg};
  border-radius: 30px;
  padding: 24px 16px;
`;

const Card = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

export default Card;
