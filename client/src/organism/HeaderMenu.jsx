import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Flexbox } from '@atoms'
import { Text } from '@atoms'
import { Input } from '@atoms'
import { sizes } from '@base';
import Bell from '@assets/icons/bell.svg'


export const HeaderBox = styled.div`
    background-color: #fff;
    position: fixed;
    width: 78%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 100px;
    margin-left: 16.5%;
    padding: 30px 50px;
    
    @media screen and (max-width: 450px) {
    }
`;

export const SearchButton = styled.button`
    width: 50px;
    height: 50px;
    background-color: #ccc;

    @media screen and (max-width: 450px) {
    }
`;

export const Avatar = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50px;

    @media screen and (max-width: 450px) {
    }
`;

const HeaderMenu = () => {
    return (
        <HeaderBox>
            <Flexbox gap={'100px'}>
                <Text fontSize={sizes.xLarge} color={'#000'} fontWeight={'600'}>Расписание</Text>
                <Input width={'500px'} boxShadow={'1px 2px 8px 0px #00000026'} placeholder={'Поиск'} fontSize={'18px'}>
                    <SearchButton>Искать</SearchButton>
                </Input>
            </Flexbox>
            <Flexbox gap={'30px'}>
                <img src={Bell}/>
                <Flexbox direction={'column'} align={'none'} gap={'0px'}>
                    <Text color={'#000'}>Name Surname</Text>
                    <Text color={'#5C5B5B'}>ID: 24743</Text>
                </Flexbox>
                <Avatar src="https://www.famousbirthdays.com/faces/heeseung-image.jpg"/>
            </Flexbox>
        </HeaderBox>
    );
};

export default HeaderMenu;
