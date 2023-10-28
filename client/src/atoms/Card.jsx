import React from 'react';
import styled from 'styled-components';

import { colors } from '../base';

export const CardContainer = styled.span`
  background-color: ${colors.cardBg};
  border-radius: 30px;
  padding: 24px 16px;
  display: inline-block;
  width: 20%
`;

const Card = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};
