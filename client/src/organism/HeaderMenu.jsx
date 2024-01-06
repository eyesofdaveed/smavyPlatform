import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Bell from '@assets/icons/bell.svg';
import More from '@assets/icons/more.svg';
import Search from '@assets/icons/search.svg';
import { Flexbox, Input, Text } from '@atoms';
import { colors, sizes } from '@base';
import { logout } from '../store/authSlice';

export const HeaderBox = styled.div`
  background-color: #fff;
  position: fixed;
  top: 0;
  display: flex;
  max-width: 100%;
  width: 100%;
  z-index: 3;
`;
export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 40px;
  padding-left: 400px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.04);

  @media screen and (max-width: 850px) {
    padding-left: 0px;
    justify-content: center;
  }
  @media screen and (max-width: 450px) {
    padding-left: 60px;
    padding: 20px 0px;
  }
`;
export const SearchButton = styled.button`
  width: 36px;
  height: 36px;
  background-color: ${colors.activeBlue};
  border: none;
  border-radius: 10px;
  margin-left: -46px;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50px;
`;

export const InputDisplay = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1250px) {
    display: none;
  }
`;

export const HeaderAvatar = styled.div`
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const Submenu = styled.div`
  position: absolute;
  right: 0;
  top: 120px;
  background-color: #fff;
  border: none;
  border-radius: 10px;
  box-shadow: -7px 7px 8px 0px #00000026;
  text-align: center;
`;

export const SubmenuItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 250px;
  height: 50px;
  font-size: 18px;
  cursor: pointer;
  border: none;
`;

export const LogoutButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  color: red;
  font-size: 18px;
`;

const HeaderMenu = () => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };
  const dispatch = useDispatch();
  const handleLogout = () => {
    window.location.href = '/login';
    dispatch(logout());
  };

  return (
    <HeaderBox>
      <HeaderWrapper>
        <Flexbox gap={'100px'} gaLaptop={'50px'} justify={'left'}>
          <Text
            fontSize={sizes.xLarge}
            color={'#000'}
            fontWeight={'600'}
            fontSizePhone={'24px'}
          >
            Расписание
          </Text>
          <InputDisplay>
            <Input
              width="500px"
              padding="20px"
              height="60px"
              widthLaptop="300px"
              boxShadow="1px 2px 8px 0px #00000026"
              placeholder="Поиск"
              fontSize="18px"
              displayLaptopL="none"
            />
            <SearchButton>
              <img src={Search} alt="Serach Icon" />
            </SearchButton>
          </InputDisplay>
        </Flexbox>
        <HeaderAvatar>
          <Flexbox gap={'30px'}>
            <img src={Bell} />
            <Flexbox direction={'column'} align={'none'} gap={'0px'}>
              <Text color={'#000'}>Name Surname</Text>
              <Text color={'#5C5B5B'}>ID: 24743</Text>
            </Flexbox>
            <Avatar src="https://www.famousbirthdays.com/faces/heeseung-image.jpg" />
            <button
              style={{
                background: 'transparent',
                border: 'none',
                width: '50px',
                height: '50px',
                borderRadius: '5px',
              }}
              onClick={toggleSubMenu}
            >
              <img src={More} />
            </button>
            {isSubMenuOpen && (
              <Submenu>
                <SubmenuItem>Submenu Item 1</SubmenuItem>
                <SubmenuItem>Submenu Item 2</SubmenuItem>
                <SubmenuItem>
                  <LogoutButton onClick={handleLogout}>Выйти</LogoutButton>
                </SubmenuItem>
              </Submenu>
            )}
          </Flexbox>
        </HeaderAvatar>
      </HeaderWrapper>
    </HeaderBox>
  );
};

export default HeaderMenu;
