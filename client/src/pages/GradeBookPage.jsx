import React from 'react';
import styled from 'styled-components';

import { SubjectCard } from '@atoms';

const GradeBookWrapper = styled.div`
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

const GradeBookPage = () => {
    return (
        <GradeBookWrapper>
            <SubjectCard subject={'Философия'} teacher={'Фио преподавателя'} rk1={'92,00'} rk2={'89,00'} rating={'91,00'} quiz={'91,00'}></SubjectCard>
            <SubjectCard subject={'Философия'} teacher={'Фио преподавателя'} rk1={'92,00'} rk2={'89,00'} rating={'91,00'} quiz={'91,00'}></SubjectCard>
            <SubjectCard subject={'Философия'} teacher={'Фио преподавателя'} rk1={'92,00'} rk2={'89,00'} rating={'91,00'} quiz={'91,00'}></SubjectCard>
            <SubjectCard subject={'Философия'} teacher={'Фио преподавателя'} rk1={'92,00'} rk2={'89,00'} rating={'91,00'} quiz={'91,00'}></SubjectCard>
        </GradeBookWrapper>
    );
};

export default GradeBookPage;