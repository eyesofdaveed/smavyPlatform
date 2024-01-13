import React from 'react';
import styled from 'styled-components';

import { Text } from './Text';
import { OneMessage } from './OneMessage'

const MessagesWrapper = styled.div`
    width: 300px;
    background-color: #fff;
    padding: 25px 15px;
    border-radius: 15px;
    box-shadow: 1px 2px 8px 0px #00000026;
    margin-top: 20px;
`;

export const Messages = ({}) => {
    return (
        <MessagesWrapper>
            <Text color={'#000'} fontSize={'21px'} fontWeight={'600'}>Уведомления</Text>
            <OneMessage
                name="Преподаватель"
                content="Добавил новое задание по дисциплине “Философия”"
                date="Сегодня, 19:33"
            />
            <OneMessage
                name="Преподаватель"
                content="Добавил новое задание по дисциплине “Философия”"
                date="Сегодня, 19:33"
            />
        </MessagesWrapper>
    );
};