import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '@base';
import LogoImg from '@assets/img/logo.png'
import ProfileIcon from '@assets/icons/profileIcon.svg'
import NewsIcon from '@assets/icons/server.svg'
import ScheduleIcon from '@assets/icons/calendar.svg'
import CoursesIcon from '@assets/icons/book.svg'
import JournalIcon from '@assets/icons/book-open.svg'
import MessageIcon from '@assets/icons/message-square.svg'
import Toggle from '@assets/icons/toggle.svg'

export const SidebarBox = styled.div`
    background-color: ${colors.sidebarColor};
    position: fixed;
    left: 0;
    width: auto;
    height: 100vh;
    padding: 30px 40px; 
    z-index: 5;
    transition: 0.5s;

    @media screen and (max-width: 850px) {
        height: 96vh;
        width: 25px;
        padding: 10px; 
        margin: 20px 0;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
`;

export const Logo = styled.img`
    width: 100%;
    visibility: visible;
    margin-top: 20px;

    @media screen and (max-width: 850px) {
        visibility: hidden;
        margin-top: 0px;
    }
`;

export const Navigation = styled.nav`
    margin-top: 50px;
    visibility: visible;

    @media screen and (max-width: 850px) {
        margin-top: 20px;
    }
`;

export const Submenu = styled.div`
    opacity: 0;
    position: absolute;
    right: -160px;
    top: 0px;
    background-color: #fff;
    padding: 20px 40px;
    border: none;
    border-radius: 16px;
    z-index: 5;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    transition: 0.3s all ease;

    &:hover {
        opacity: 1;
    }

    @media screen and (max-width: 550px) {
        right: -60px;

    }
`;

export const Li = styled.li`
    position: relative;
    padding: 20px;

    &:hover ${Submenu}{
        opacity: 1;
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

    &:hover{
        color: ${colors.activeBlue};
    }

    ${({ $isActive }) =>
        $isActive &&
        `
        color: ${colors.activeBlue};

        `
    }
`;

const ToggleStyle = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 100px;
    border: none;
    box-shadow: 1px 2px 8px 0px #00000026;
    background: ${colors.sidebarColor};
    margin-right: -20px;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
    float: right;
    display: none;

    @media screen and (max-width: 850px) {
        display: flex;
    }
`;

export const SubmenuItem = styled(StyledLink)`
    padding: 10px 0px;
`;

const navLinks = [
    { id: 1, name: 'profile', path: '/profile', icon: ProfileIcon, text: 'Профиль' },
    { id: 2, name: 'news', path: '/news', icon: NewsIcon, text: 'Новости' },
    { id: 3, name: 'schedule', path: '/schedule', icon: ScheduleIcon, text: 'Расписание' },
    { id: 4, name: 'courses', path: '/courses', icon: CoursesIcon, text: 'Курсы' },
    { id: 5, name: 'gradebook', path: '/gradebook', icon: JournalIcon, text: 'Журнал' },
    { id: 6, name: 'chat', path: '/chat', icon: MessageIcon, text: 'Чаты' },
];

const Sidebar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [currentPage, setCurrentPage] = useState('profile');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const checkIfMobile = () => {
            const mediaQuery = window.matchMedia('(max-width: 850px)');
            setIsMobile(mediaQuery.matches);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    useEffect(() => {
            setCurrentPage('profile');
            navigate('/profile');
    }, []);

    function showBlocks() {
        setIsMobile(prevState => !prevState)
    }

    return (
        <SidebarBox style={{ width: isMobile ? '25px' : '250px', padding: isMobile ? '10px 0px' : '20px 40px' }}>
            <ToggleStyle onClick={showBlocks}>
                <img src={Toggle} alt="toggle" />
            </ToggleStyle>
            <Logo src={LogoImg} alt="Logo" style={{ visibility: isMobile ? 'hidden' : 'visible' }} />
            <Navigation style={{ visibility: isMobile ? 'hidden' : 'visible' }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                {navLinks.map(link => (
                    <Li key={link.id}>
                        <StyledLink onClick={() => setCurrentPage(link.name)} to={link.path} $isActive={currentPage === link.name}>
                            <img src={link.icon} alt={link.text} />
                            {link.text}
                        </StyledLink>
                    </Li>
                     ))}
                </ul>
            </Navigation>
        </SidebarBox>
    );
};

export default Sidebar;
