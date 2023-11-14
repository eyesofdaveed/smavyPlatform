import React from 'react';
import styled from 'styled-components';

export const StyledFlexbox = styled.div`
  display: flex;
  flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : 'nowrap')};
  justify-content: ${({ justify }) => (justify ? justify : 'center')};
  align-items:  ${({ align }) => (align ? align : 'center')};
  align-items: ${({ align }) => (align ? align : 'center')}; 
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => (gap ? gap : '16px')};
  width: ${({ width }) => width};

  @media screen and (max-width: 450px) {
    visibility: ${({ visibility }) => visibility};
    gap: ${({ gapPhone }) => gapPhone};
  }
`;

export const Flexbox = ({ direction = 'row', gap, gapPhone, align, children, width, justify, flexWrap, visibility }) => {
  return (
    <StyledFlexbox direction={direction} gap={gap} gapPhone={gapPhone} align={align} width={width} justify={justify} flexWrap={flexWrap} visibility={visibility}>
      {children}
    </StyledFlexbox>
  );
};

