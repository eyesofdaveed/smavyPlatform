import React from 'react';
import styled from 'styled-components';

import { colors } from '@base';

export const CardContainer = styled.span`
  background-color: ${colors.cardBg};
  border-radius: 30px;
  padding: 24px 16px;
  display: inline-block;
  width: ${({ width }) => (width ? width : '100%')};
`;

export const Card = ({ width, children }) => {
  return <CardContainer width={width}>{children}</CardContainer>;
};
