import React from 'react';
import styled from 'styled-components';

const StyledFlexbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => (gap ? gap : '16px')};
  align-items: ${({ align }) => align};\
  width: 100%;
`;

const Flexbox = ({ direction = 'row', gap, align, children }) => {
  return (
    <StyledFlexbox direction={direction} gap={gap} align={align}>
      {children}
    </StyledFlexbox>
  );
};

export default Flexbox;
