import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Messages, SubjectTimeTable } from '@atoms';
import { colors } from '@base';
import Toggle from '@assets/icons/toggle.svg'

export const RightBarBox = styled.div`
    background-color: ${colors.sidebarColor};
    position: fixed;
    right: 0;
    width: auto;
    height: 100vh;
    z-index: 5;
    transition: 0.5s;
    margin-top: 140px;
    padding: 20px;
    border-radius: 20px 0px;
`;

const ToggleStyle = styled.button`
    position: fixed;
    overflow: hidden;
    width: 40px;
    height: 40px;
    border-radius: 100px;
    border: none;
    box-shadow: 1px 2px 8px 0px #00000026;
    background: ${colors.sidebarColor};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -40px;
    margin-top: -40px;
    rotate: 180deg;
`;

const RightBar = ({ isClosed, toggleRightBar }) => {
    return (
        <RightBarBox style={{ width: isClosed ? '0px' : '320px' }}>
            <ToggleStyle onClick={toggleRightBar} style={{ rotate: isClosed ? '180deg' : '0deg' }}>
                <img src={Toggle} alt="toggle" />
            </ToggleStyle>
            <SubjectTimeTable />
            <Messages style={{ display: isClosed ? 'none' : 'block' }} />
        </RightBarBox>
    );
};

export default RightBar;