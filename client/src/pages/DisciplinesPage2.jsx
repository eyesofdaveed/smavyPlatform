import React from 'react';
import styled from 'styled-components';

import { DisciplinesSubject } from '@atoms';

const PageWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 100%;
    padding: 36px;
    padding-right: 450px;

    @media screen and (max-width: 1620px){
    padding: 20px;
    }
`;


const DisciplinesPage2 = () => {
    return (
        <PageWrapper>
            <DisciplinesSubject />
            <DisciplinesSubject />
            <DisciplinesSubject />
            <DisciplinesSubject />
            <DisciplinesSubject />
            <DisciplinesSubject />
        </PageWrapper>
    )
};

export default DisciplinesPage2;