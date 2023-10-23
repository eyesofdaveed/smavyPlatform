import React from 'react';
import styled from 'styled-components';

const TextContainer = styled.div`
  font-weight: 500;
  line-height: 32px;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
  color: #fff;
`;

const Text = ({ fontSize, children }) => {
  return <TextContainer fontSize={fontSize}>{children}</TextContainer>;
};

export default Text;
