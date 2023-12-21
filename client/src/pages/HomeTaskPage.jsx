import React from 'react';
import styled from 'styled-components';

import { HomeTaskCard, Text } from '@atoms'

const PageWrapper = styled.div`
  display: grid;
  gap: 20px;
`;

const HomeTaskPage = () => {
    return (
        <PageWrapper>
            <Text color={'#000'} fontWeight={'600'} fontSize={'30px'} lineHeight={'50px'}>Философия - 1 неделя</Text>
            <HomeTaskCard 
            text={"Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. Risus praesent morbi faucibus ultricies a tristique etiam imperdiet ac."}
            date={"25 февраля 11:59"} 
            deadline={"15 дней"}
            />
        </PageWrapper>
    )
};

export default HomeTaskPage;