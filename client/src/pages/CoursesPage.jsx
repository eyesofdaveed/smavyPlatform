import React from 'react';
import styled from 'styled-components';

import { DisciplinesSubject } from '@atoms';

const PageWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 100%;

    @media screen and (max-width: 1620px) {
        padding: 20px;
    }
`;

const subjectsData = [
    {
        name: 'Философия',
        teacher: 'Фио преподавателя',
        period: 'Текущая неделя - 3',
        task: 'Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas.'
    },
    {
        name: 'Философия',
        teacher: 'Фио преподавателя',
        period: 'Текущая неделя - 3',
        task: 'Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas.'
    },
    {
        name: 'Философия',
        teacher: 'Фио преподавателя',
        period: 'Текущая неделя - 3',
        task: 'Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas.'
    },
    {
        name: 'Философия',
        teacher: 'Фио преподавателя',
        period: 'Текущая неделя - 3',
        task: 'Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas.'
    },
    {
        name: 'Философия',
        teacher: 'Фио преподавателя',
        period: 'Текущая неделя - 3',
        task: 'Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas.'
    },
    {
        name: 'Философия',
        teacher: 'Фио преподавателя',
        period: 'Текущая неделя - 3',
        task: 'Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas.'
    },
];

const CoursesPage = () => {
    return (
        <PageWrapper>
            {subjectsData.map((subject, index) => (
                <DisciplinesSubject
                    key={index}
                    name={subject.name}
                    teacher={subject.teacher}
                    period={subject.period}
                    task={subject.task}
                />
            ))}
        </PageWrapper>
    );
};

export default CoursesPage;
