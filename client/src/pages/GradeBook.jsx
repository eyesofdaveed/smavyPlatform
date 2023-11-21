import React from 'react';
import styled from 'styled-components';
import { Progress, Space } from 'antd';


import { Flexbox, Title, Text } from '@atoms';
import { colors, sizes } from '../base';

const GradeBookWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
//   align-items: center;
  max-width: 100%;
  padding: 100px 500px 50px 400px;
`;

const SubjectCard = styled.div`
    width: 32%;
    height: 300px;
    background-color: #fff;
    box-shadow: 1px 2px 8px 0px #00000026;
    border-radius: 24px;
    margin-top: 20px;
`;

const GradeBook = () => {
  return (
    <GradeBookWrapper>
        <SubjectCard>
            <Flexbox>
                <Space wrap>
                    <Progress type="circle" percent={90} strokeColor='{active_blue}' strokeWidth={8} trailColor="#DCDCDC" showInfo={false}/>    
                </Space>
            </Flexbox>
        </SubjectCard>
        <SubjectCard></SubjectCard>
        <SubjectCard></SubjectCard>
        <SubjectCard></SubjectCard>
        <SubjectCard></SubjectCard>
        <SubjectCard></SubjectCard>
        <SubjectCard></SubjectCard>
        <SubjectCard></SubjectCard>
        <SubjectCard></SubjectCard>
    </GradeBookWrapper>
  );
};

export default GradeBook;