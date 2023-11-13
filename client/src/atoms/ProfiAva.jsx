import React from 'react';
import styled from 'styled-components';

import { Flexbox } from './Flexbox';
import { Text } from './Text';
import { sizes } from '@base';
import { colors } from '@base';
import GroupIcon from '@assets/icons/groupIcon.svg'

const ProfileWrapper = styled.div`
    display: flex;
    column-gap: 100px;
    width: 100%;

    @media screen and (max-width: 1250px) {
        column-gap: 50px;
    }
    @media screen and (max-width: 1100px) {
        grid-column: 1 / span 2;
        justify-content: space-between;
    }
    @media screen and (max-width: 450px) {
        column-gap: 40px;
        margin-bottom: 20px;
    }
`;

const ProfiColumn = styled.div`
    display: ${({ display }) => display};
    justify-content: center;
    text-align: center;
`;

const ProfileImageBox = styled.div`
    width: 130px;
    height: 130px;
    border-radius: 150px;
    border: 6px solid #C0FDB6;
    box-shadow: 0 0 10px #C0FDB6;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;

    @media screen and (max-width: 450px) {
        border: 5px solid #C0FDB6;
        width: 77px;
        height: 77px;
    }
`;

const ProfileImage = styled.img`
    width: 120px;
    border-radius: 100px;

    @media screen and (max-width: 450px) {
        width: 70px;
    }
`;

const Icon = styled.img`
    @media screen and (max-width: 450px) {
        width: 50px;
    }
`;

export const ProfileAva = ({ children }) => {
    return (
        <ProfileWrapper>
            <ProfiColumn>
                <ProfileImageBox>
                    <ProfileImage src="https://www.famousbirthdays.com/faces/heeseung-image.jpg" alt="avatar" />
                </ProfileImageBox>
                <Text fontSize={sizes.large} fontSizePhone={'14px'} lineHeightPhone={'20px'}>Name Surname</Text>
                <Text fontSize={sizes.medium} fontSizePhone={'12px'} lineHeightPhone={'20px'}>id: 24743</Text>
            </ProfiColumn>
            <ProfiColumn>
                <Flexbox direction="column" gap="10px">
                    <Icon src={GroupIcon} alt="img" />
                    <Text fontSize={sizes.large} fontSizePhone={'12px'} lineHeightPhone={'18px'}>Группа: ITIS-1916R</Text>
                </Flexbox>
                <Flexbox direction="column" gap="10px">
                    <Icon src={GroupIcon} alt="img" />
                    <Text fontSize={sizes.large}  fontSizePhone={'14px'} lineHeightPhone={'20px'}>14 одногруппников</Text>
                </Flexbox>
            </ProfiColumn>
        </ProfileWrapper>
    );
};