import React from 'react';
import styled from 'styled-components';

export const StyledGridbox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    width: ${({ width }) => (width ? width : '100%')};
    align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
`;

export const Gridbox = ({ direction = 'row', children, width, alignItems }) => {
    return (
        <StyledGridbox direction={direction} width={width} alignItems={alignItems}>
            {children}
        </StyledGridbox>
    );
};

