import React from 'react';
import styled from 'styled-components';

export const StyledFlexbox = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : 'center')};
  align-items: ${({ align }) => (align ? align : 'center')}; 
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => (gap ? gap : '16px')};
  width: ${({ width }) => width};
`;

export const Flexbox = ({ direction = 'row', gap, align, children, width, justify }) => {
  return (
    <StyledFlexbox direction={direction} gap={gap} align={align} width={width} justify={justify}>
      {children}
    </StyledFlexbox>
  );
};

export default Flexbox;
