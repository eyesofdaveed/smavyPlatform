
import React from 'react';
import styled from 'styled-components';
import { Progress, Space } from 'antd';


import { Flexbox, Text } from '@atoms';
import { colors, sizes } from '../base';


export const ProfiMainInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 120px;
  width: 100%;
  
`;

export const GPA = styled.p`
    font-size: 53px;
    color: #76FFF7;
    text-shadow: 0 0 10px #76FFF7;
`;

export const ColumnBar = styled.div`
    transform: rotate(270deg);
`;

export const ProgressCircleShadow = styled.div`
    display: inline-block;
    box-shadow: 0 0 50px #4E5671;
    border-radius: 50%;
`;
export const ProgressLineShadow = styled.div`
    display: inline-block;
    box-shadow: 0 0 50px #4E5671;
    // border-radius: 50%;
`;
export const ProfiProgress = ({ }) => {
    return (
        <>
            <Flexbox direction="column" gap="30px">
                <Space wrap>
                    <ProgressCircleShadow>
                        <Progress type="circle" percent={90} strokeColor='{active_blue}' strokeWidth={8} trailColor="#4E5671" showInfo={false} />
                    </ProgressCircleShadow>
                </Space>
                <Text fontSize={sizes.xLarge}>Оценки</Text>
            </Flexbox>
            <Flexbox direction="column" gap="30px">
                <ColumnBar>
                    <div style={{ width: 100 }}>
                        <Progress percent={100} size="small" strokeColor='#DD86CA' trailColor="transparent" strokeWidth={12} showInfo={false} />
                        <Progress percent={30} size="small" strokeColor='#DD86CA' trailColor="transparent" strokeWidth={12} showInfo={false} />
                        <Progress percent={100} size="small" strokeColor='#DD86CA' trailColor="transparent" strokeWidth={12} showInfo={false} />
                        <Progress percent={60} size="small" strokeColor='#4E5671' trailColor="transparent" strokeWidth={12} showInfo={false} />
                    </div>
                </ColumnBar>

                <Text fontSize={sizes.xLarge}>Посещаемость</Text>
            </Flexbox>
            <Flexbox direction="column" gap="30px">
                <GPA>3.6</GPA>
                <Text fontSize={sizes.xLarge}>GPA</Text>
            </Flexbox>
        </>
    );
};