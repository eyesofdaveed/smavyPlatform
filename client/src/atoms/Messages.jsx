import React from 'react';
import styled from 'styled-components';

import { Flexbox } from './Flexbox';
import { Text } from './Text';
import { sizes } from '@base';
import { colors } from '@base';
import GroupIcon from '@assets/icons/groupIcon.svg'

const MessagesWrapper = styled.div`
    width: 380px;
    background-color: #fff;
    padding: 50px 28px;
    border-radius: 30px;
    box-shadow: 1px 2px 8px 0px #00000026;

    @media screen and (max-width: 1250px) {
    }
    @media screen and (max-width: 1100px) {
    }
    @media screen and (max-width: 450px) {
    }
`;
const OneMessage = styled.div`
    display: grid;
    gap: 5px;
    background-color: #E4F3FB;
    padding: 20px 20px 8px 20px;
    margin-top: 20px;
    border-radius: 10px;
`;
const DataText = styled(Text)`
    width: 100%;
`;

export const Messages = ({ children }) => {
    return (
        <MessagesWrapper>
            <Text color={'#000'} fontSize={'28px'} fontWeight={'600'}>Уведомления</Text>
            <OneMessage>
                <Text color={'#000'} fontSize={'18px'} fontWeight={'500'} lineHeight={'24px'}>Преподаватель</Text>
                <Text color={'#000'} fontSize={'16px'} fontWeight={'500'} lineHeight={'24px'}>добавил новое задание по дисциплине “Философия”</Text>
                <Text color={'#000'} fontSize={'15px'} fontWeight={'500'} textAlign={'right'} lineHeight={'15px'}>Сегодня, 19:33</Text>
            </OneMessage>
            <OneMessage>
                <Text color={'#000'} fontSize={'18px'} fontWeight={'500'} lineHeight={'24px'}>Преподаватель</Text>
                <Text color={'#000'} fontSize={'16px'} fontWeight={'500'} lineHeight={'24px'}>добавил новое задание по дисциплине “Философия”</Text>
                <Text color={'#000'} fontSize={'15px'} fontWeight={'500'} textAlign={'right'} lineHeight={'15px'}>Сегодня, 19:33</Text>
            </OneMessage>
            <OneMessage>
                <Text color={'#000'} fontSize={'18px'} fontWeight={'500'} lineHeight={'24px'}>Преподаватель</Text>
                <Text color={'#000'} fontSize={'16px'} fontWeight={'500'} lineHeight={'24px'}>добавил новое задание по дисциплине “Философия”</Text>
                <DataText color={'#000'} fontSize={'15px'} fontWeight={'500'} textAlign={'right'} lineHeight={'15px'}>Сегодня, 19:33</DataText>
            </OneMessage>
        </MessagesWrapper>
    );
};