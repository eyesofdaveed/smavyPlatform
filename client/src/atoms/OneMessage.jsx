import React from 'react';
import styled from 'styled-components';

import { Text } from './Text';
import { colors } from '@base';

const OneMessageStyle = styled.div`
    display: grid;
    gap: 5px;
    background-color: ${colors.notificationColor};
    padding: 20px 20px 8px 20px;
    margin-top: 20px;
    border-radius: 10px;
`;

export const OneMessage = ({ name, content, date }) => {
    return (
        <OneMessageStyle>
            <Text color={'#000'} fontSize={'18px'} fontWeight={'500'} lineHeight={'24px'}>{name}</Text>
            <Text color={'#000'} fontSize={'16px'} fontWeight={'500'} lineHeight={'24px'}>{content}</Text>
            <Text color={'#000'} fontSize={'15px'} fontWeight={'500'} textAlign={'right'} lineHeight={'15px'}>{date}</Text>
        </OneMessageStyle>
    );
};