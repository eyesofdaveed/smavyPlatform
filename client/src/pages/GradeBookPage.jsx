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

const subjects = [
    {
        subject: 'Философия',
        teacher: 'Фио преподавателя',
        rk1: '92,00',
        rk2: '89,00',
        rating: '91,00',
        quiz: '91,00',
    },
    {
        subject: 'Философия',
        teacher: 'Фио преподавателя',
        rk1: '92,00',
        rk2: '89,00',
        rating: '91,00',
        quiz: '91,00',
    },
    {
        subject: 'Философия',
        teacher: 'Фио преподавателя',
        rk1: '92,00',
        rk2: '89,00',
        rating: '91,00',
        quiz: '91,00',
    },
];

const GradeBookPage = () => {
    return (
        <GradeBookWrapper>
            {subjects.map((data, index) => (
                <SubjectCard
                    key={index}
                    subject={data.subject}
                    teacher={data.teacher}
                    rk1={data.rk1}
                    rk2={data.rk2}
                    rating={data.rating}
                    quiz={data.quiz}
                />
            ))}
        </GradeBookWrapper>
    );
};

export default GradeBookPage;
