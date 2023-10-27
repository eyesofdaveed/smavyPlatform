import React from 'react';
import styled from 'styled-components';

const StyledFlexbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => (gap ? gap : '16px')};
  width: ${({width}) => width };
`;

const Flexbox = ({ direction = 'row', gap, align, children, width }) => {
  return (
    <StyledFlexbox direction={direction} gap={gap} align={align} width={width}>
      {children}
    </StyledFlexbox>
  );
};

export default Flexbox;
