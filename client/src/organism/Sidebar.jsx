import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LogoImg from '@assets/img/logo.png'
import ProfileIcon from '@assets/icons/profileIcon.svg'
import NewsIcon from '@assets/icons/server.svg'
import ScheduleIcon from '@assets/icons/calendar.svg'
import DisciplineIcon from '@assets/icons/book.svg'
import JournalIcon from '@assets/icons/book-open.svg'
import MessageIcon from '@assets/icons/message-square.svg'

export const SidebarBox = styled.div`
    background-color: #EDEEF2;
    position: fixed;
    width: auto;
    height: 100vh;
    padding: 30px 40px; 
    @media screen and (max-width: 450px) {
    }
`;

export const Logo = styled.img`
    width: 100%;
    @media screen and (max-width: 450px) {
    }
`;

export const Navigation = styled.nav`
    margin-top: 20px;
    @media screen and (max-width: 450px) {
    }
`;

export const Li = styled.li`
    padding: 20px;
    @media screen and (max-width: 450px) {
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 15px;
    color: black;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`;

const Sidebar = () => {
    return (
        <SidebarBox>
            <Logo src={LogoImg} alt="Logo"/>
            <Navigation>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <Li>
                        <StyledLink to="/">
                            <img src={ProfileIcon}/>
                            Профиль
                        </StyledLink>
                    </Li>
                    <Li>
                        <StyledLink to="/">
                            <img src={NewsIcon}/>
                            Новости
                        </StyledLink>
                    </Li>
                    <Li>
                        <StyledLink to="/">
                            <img src={ScheduleIcon}/>
                            Расписание
                        </StyledLink>
                    </Li>
                    <Li>
                        <StyledLink to="/">
                            <img src={DisciplineIcon}/>
                            Дисциплины
                        </StyledLink>
                    </Li>
                    <Li>
                        <StyledLink to="/">
                            <img src={JournalIcon}/>
                            Журнал 
                        </StyledLink>
                    </Li>
                    <Li>
                        <StyledLink to="/">
                            <img src={MessageIcon}/>
                            Чаты
                        </StyledLink>
                    </Li>
                </ul>
            </Navigation>
        </SidebarBox>
    );
};

export default Sidebar;
