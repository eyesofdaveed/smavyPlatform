import React from 'react';
import styled from 'styled-components';
import { Progress, Space } from 'antd';

import { Flexbox, Text } from '@atoms';
import { colors } from '../base';

export const SubjectCardStyle = styled.div`
    width: 32%;
    height: auto;
    background-color: #fff;
    box-shadow: 1px 2px 8px 0px #00000026;
    border-radius: 24px;
    margin-top: 20px;

    @media screen and (max-width: 1250px){
        width: 48%;
    }
    @media screen and (max-width: 750px){
        width: 100%;
    }
`;

export const CardContent = styled.div`
    padding: 40px 24px;
`;

export const Grades = styled.div`
    margin-top: 15px;
`

export const GradeCard = styled.div`
    background-color: #F0F3FF;
    border-radius: 13px;
    width: 31%;
    padding: 12px 0px;
    margin-top: 10px;
    text-align: center;

    @media screen and (max-width: 950px){
        width: 48%;
    }
`;
export const SubjectCard = ({ subject, teacher, rk1, rk2, rating, quiz }) => {
    return (
        <SubjectCardStyle>
            <CardContent>
                <Flexbox justify={'left'} gap={'20px'}>
                    <Space wrap>
                        <Progress type="circle" percent={91} strokeColor={colors.activeBlue} strokeWidth={9} trailColor="#DCDCDC" size={80} />
                    </Space>
                    <Flexbox direction={'column'} align={'start'} gap={'10px'}>
                        <Text color={'#000'} fontSize={'18px'} fontSizeTablet={'16px'} fontWeight={'600'} lineHeight={'20px'} lineHeightTablet={'16px'}>{subject}</Text>
                        <Text color={'#000'} fontSize={'16px'} fontSizeTablet={'14px'} fontWeight={'500'} lineHeight={'20px'} lineHeightTablet={'16px'}>{teacher}</Text>
                    </Flexbox>
                </Flexbox>
                <Grades>
                    <Flexbox flexWrap={'wrap'} gap={'auto'} justify={'space-between'}>
                        <GradeCard>
                            <Text color={'#000'} fontSize={'19px'} fontWeight={'600'} lineHeight={'25px'}>{rk1}</Text>
                            <Text color={'#7C829B'} fontSize={'16px'} fontWeight={'500'} lineHeight={'20px'}>РК 2</Text>
                        </GradeCard>
                        <GradeCard>
                            <Text color={'#000'} fontSize={'19px'} fontWeight={'600'} lineHeight={'25px'}>{rk2}</Text>
                            <Text color={'#7C829B'} fontSize={'16px'} fontWeight={'500'} lineHeight={'20px'}>РК 2</Text>
                        </GradeCard>
                        <GradeCard>
                            <Text color={'#000'} fontSize={'19px'} fontWeight={'600'} lineHeight={'25px'}>{rating}</Text>
                            <Text color={'#7C829B'} fontSize={'16px'} fontWeight={'500'} lineHeight={'20px'}>РК 2</Text>
                        </GradeCard>
                        <GradeCard>
                            <Text color={'#000'} fontSize={'19px'} fontWeight={'600'} lineHeight={'25px'}>{quiz}</Text>
                            <Text color={'#7C829B'} fontSize={'16px'} fontWeight={'500'} lineHeight={'20px'}>РК 2</Text>
                        </GradeCard>
                    </Flexbox>
                </Grades>
            </CardContent>
        </SubjectCardStyle>
    );
};