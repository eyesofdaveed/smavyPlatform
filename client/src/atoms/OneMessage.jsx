import React from 'react';
import styled from 'styled-components';

import { Text } from './Text';
import { colors } from '@base';

const OneMessageStyle = styled.div`
    display: grid;
    gap: 5px;
    background-color: ${colors.notificationColor};
    padding: 15px 15px 8px 15px;
    margin-top: 10px;
    border-radius: 10px;
`;

export const OneMessage = ({ name, content, date }) => {
    return (
        <OneMessageStyle>
            <Text color={'#000'} fontSize={'15px'} fontWeight={'500'} lineHeight={'24px'}>{name}</Text>
            <Text color={'#000'} fontSize={'14px'} fontWeight={'500'} lineHeight={'20px'}>{content}</Text>
            <Text color={'#000'} fontSize={'12px'} fontWeight={'500'} textAlign={'right'} lineHeight={'20px'}>{date}</Text>
        </OneMessageStyle>
    );
};