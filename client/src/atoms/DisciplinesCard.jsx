import React from 'react';
import styled from 'styled-components';

import { Text } from './Text';
import { colors } from '@base';

export const DisciplinesCardStyle = styled.div`
    background-color: ${colors.taskCardBg};
    display: grid;
    padding: 20px;
    border-radius: 24px;
    gap: 10px;
`;

export const DisciplinesCard = ({ title, text }) => {
    return (
        <DisciplinesCardStyle>
            <Text color={'#000'} fontSize={'21px'} fontWeight={'500'}>{title}</Text>
            <Text color={'#000'} fontSize={'20px'}>{text}</Text>
        </DisciplinesCardStyle>
    );
};