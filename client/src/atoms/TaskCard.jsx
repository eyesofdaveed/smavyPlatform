import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import { Text } from './Text';
import { Flexbox } from './Flexbox';
import { colors } from '@base';

export const TaskCardStyle = styled.div`
    background-color: ${colors.taskCardBg};
    padding: 30px;
    border-radius: 24px;
`;
const StyledLink = styled(Link)`
    color: ${colors.linkColor};
    text-decoration: none;
    font-size: 17px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`;

export const TaskCard = ({ week, text, doc1, doc2, doc3, test, homeTask }) => {
    return (
        <TaskCardStyle>
            <Text color={'#000'} fontSize={'24px'} fontWeight={'500'} lineHeight={'50px'}>{week}</Text>
            <Text color={'#000'} fontSize={'23px'} fontWeight={'500'} lineHeight={'30px'}>{text}</Text>
            <Text color={'#000'} fontSize={'19px'} fontWeight={'400'} lineHeight={'50px'}>Материалы:</Text>
            <Flexbox direction={'column'} align={'left'} gap={'10px'}>
                <StyledLink to="/">{doc1}</StyledLink>
                <StyledLink to="/">{doc2}</StyledLink>
                <StyledLink to="/">{doc3}</StyledLink>
            </Flexbox>
            <Text color={'#000'} fontSize={'19px'} fontWeight={'400'} lineHeight={'50px'}>Тест:</Text>
            <StyledLink to="/">{test}</StyledLink>

            <Text color={'#000'} fontSize={'19px'} fontWeight={'400'} lineHeight={'50px'}>Домашнее задание:</Text>
            <StyledLink to="/">{homeTask}</StyledLink>
        </TaskCardStyle>
    );
};