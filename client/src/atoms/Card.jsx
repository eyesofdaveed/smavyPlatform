import React from 'react';
import styled from 'styled-components';

import { colors } from '../base';

const CardContainer = styled.span`
  background-color: ${colors.cardBg};
  border-radius: 30px;
  padding: 24px 16px;
  display: inline-block;
  width: ${({ width }) => (width ? width : '20%')};
`;

const Card = ({ children, width }) => {
  return <CardContainer width={width}>{children}</CardContainer>;
};

export default Card;
