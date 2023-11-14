import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Progress, Space } from 'antd';

import { Flexbox } from './Flexbox';
import { Text } from './Text';
import { colors, sizes } from '../base';

export const ProgressWrapper = styled.div`
    grid-column: 2 / span 1;
    display: flex;
    justify-content: space-between;
    align-items: end;

    @media screen and (max-width: 1100px) {
        grid-column: 1 / span 2;
    }

    @media screen and (max-width: 450px) {
        grid-column: 1 / span 1;
        gap: 20px;
    }
`;

export const GPA = styled.p`
    font-size: 53px;
    color: #76FFF7;
    text-shadow: 0 0 10px #76FFF7;

    @media screen and (max-width: 450px) {
        font-size: 36px;
    }
`;

export const ColumnBar = styled.div`
    transform: rotate(270deg);
    width: 100px;
    @media screen and (max-width: 450px) {
        width: 60px;
    }
`;

export const ProgressCircleShadow = styled.div`
    display: inline-block;
    box-shadow: 0 0 50px #4E5671;
    border-radius: 50%;
`;

export const ProgressLineShadow = styled.div`
    display: inline-block;
    box-shadow: 0 0 50px #4E5671;
`;

const CustomStyle = styled(Progress)`
  && {
    margin: ${(props) => (props.small ? '8px' : '0px')};
  }
`;

export const ProgressText = styled.div``;

export const ProfileProgress = ({ }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 450);
    useEffect(() => {
        const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 450);
        };
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const progressSize = isSmallScreen ? 70 : 100;
    return (
        <ProgressWrapper>
            <Flexbox direction="column" gap="30px" gapPhone="10px">
                <Space wrap>
                    <ProgressCircleShadow>
                        <Progress type="circle" percent={90} strokeColor='{active_blue}' strokeWidth={8} trailColor="#4E5671" showInfo={false}  width={progressSize} height={progressSize}/>
                    </ProgressCircleShadow>
                </Space>
                <ProgressText><Text fontSize={sizes.xLarge} fontSizePhone={sizes.medium}>Оценки</Text></ProgressText>
            </Flexbox>
            <Flexbox direction="column" gap="30px" gapPhone="10px">
                <ColumnBar>
                    <CustomStyle percent={100} size="small" strokeColor='#DD86CA' trailColor="transparent" strokeWidth={12} showInfo={false} />
                    <CustomStyle percent={30} size="small" strokeColor='#DD86CA' trailColor="transparent" strokeWidth={12} showInfo={false} />
                    <CustomStyle percent={100} size="small" strokeColor='#DD86CA' trailColor="transparent" strokeWidth={12} showInfo={false} />
                    <CustomStyle percent={60} size="small" strokeColor='#4E5671' trailColor="transparent" strokeWidth={12} showInfo={false} />
                </ColumnBar>
                <ProgressText><Text fontSize={sizes.xLarge} fontSizePhone={sizes.medium}>Посещаемость</Text></ProgressText>
            </Flexbox>
            <Flexbox direction="column" gap="30px" gapPhone="10px">
                <GPA>3.6</GPA>
                <ProgressText><Text fontSize={sizes.xLarge} fontSizePhone={sizes.medium}>GPA</Text></ProgressText>
            </Flexbox>
        </ProgressWrapper>
    );
};
