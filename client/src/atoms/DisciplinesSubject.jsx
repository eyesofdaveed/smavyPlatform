import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


import { Text } from './Text';
import { Flexbox } from './Flexbox';
import { colors } from '@base';
import Philosophy from '@assets/img/Philosophy.png'
import AroowIcon from '@assets/icons/arrow.svg'


const DisciplinesSubjectStyle = styled.div`
    width: 32%;
    height: auto;
    background-color: #fff;
    box-shadow: 1px 2px 8px 0px #00000026;
    border-radius: 24px;
    margin-top: 20px;

    @media screen and (max-width: 1420px){
        width: 48%;
    }
    @media screen and (max-width: 1050px){
        width: 100%;
    }
`;

export const CardContent = styled.div`
    padding: 24px;
`;

export const SubjectImage = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50px;
`;

export const Task = styled.div`
    padding: 20px 24px;
    background-color: #F0F3FF;
    border-radius: 24px;
    margin-top: 40px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    color: #2F4DB7;
    margin-top: 30px;
    display: flex;
    gap: 20px;

    @media screen and (max-width: 1050px){
        font-size: 13px;
        margin-top: 20px;
        gap: 15px;
    }
`;

export const DisciplinesSubject = ({ name, teacher, period, task }) => {
    return (
        <DisciplinesSubjectStyle>
            <CardContent>
                <Flexbox justify={'start'} gap={'40px'}>
                    <SubjectImage><img src={Philosophy}/></SubjectImage>
                    <Flexbox direction={'column'} justify={'start'} align={'left'} gap={'10px'}>
                        <Text color={'#000'} fontSize={'18px'} fontSizePhone={'16px'} lineHeight={'20px'} lineHeightPhone={'18px'} fontWeight={'600'}>{name}</Text>
                        <Text color={'#000'} fontSize={'16px'} fontSizePhone={'14px'} lineHeight={'20px'} lineHeightPhone={'16px'} fontWeight={'500'}>{teacher}</Text>
                    </Flexbox>
                </Flexbox>
                <Task>
                    <Text color={'#000'} fontSize={'15px'} fontSizePhone={'13px'} lineHeight={'30px'} lineHeightPhone={'24px'} fontWeight={'500'}>{period}</Text>
                    <Text color={'#000'} fontSize={'14px'} fontSizePhone={'12px'} lineHeight={'16px'} lineHeightPhone={'18px'} fontWeight={'400'}>{task}</Text>
                    <StyledLink to="/tasks">
                        Перейти к заданиям
                        <img src={AroowIcon} alt="" />
                    </StyledLink>
                </Task>
                </CardContent>
        </DisciplinesSubjectStyle>
    );
};