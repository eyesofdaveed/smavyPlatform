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
    top:0;
    display: flex;
    max-width: 100%;
    width: 100%;
    z-index: 3;
    
    @media screen and (max-width: 450px) {
    }
`;
export const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 40px;
    padding-left: 400px;
    
    @media screen and (max-width: 850px) {
        padding-left: 150px;
    }
    @media screen and (max-width: 450px) {
        padding-left: 136px;
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
export const InputDisplay = styled.div`
    @media screen and (max-width: 1250px) {
        display: none;
    }
`;
export const HeaderAvatar = styled.div`
    @media screen and (max-width: 850px) {
        display: none;
    }
`;
const HeaderMenu = () => {
    return (
        <HeaderBox>
            <HeaderWrapper>
                <Flexbox gap={'100px'} gaLaptop={'50px'}>
                    <Text fontSize={sizes.xLarge} color={'#000'} fontWeight={'600'} fontSizePhone={'24px'}>Расписание</Text>
                    <InputDisplay>
                    <Input width={'500px'} widthLaptop={'300px'} boxShadow={'1px 2px 8px 0px #00000026'} placeholder={'Поиск'} fontSize={'18px'} displayLaptopL={'none'}>
                        <SearchButton>Искать</SearchButton>
                    </Input>
                    </InputDisplay>
                </Flexbox>
                <HeaderAvatar>
                    <Flexbox gap={'30px'}>
                        <img src={Bell}/>
                        <Flexbox direction={'column'} align={'none'} gap={'0px'}>
                            <Text color={'#000'}>Name Surname</Text>
                            <Text color={'#5C5B5B'}>ID: 24743</Text>
                        </Flexbox>
                        <Avatar src="https://www.famousbirthdays.com/faces/heeseung-image.jpg"/>
                    </Flexbox>
                </HeaderAvatar>
            </HeaderWrapper>
        </HeaderBox>
    );
};

export default HeaderMenu;
