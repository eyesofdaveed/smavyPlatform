import React from 'react';
import styled from 'styled-components';

import { TaskCard, Text } from '@atoms';

const TasksWrapper = styled.div`
  display: grid;
  gap: 30px;
  @media screen and (max-width: 1620px) {
    padding: 20px;
  }
`;

const TasksPage = () => {
    const tasks = [
        {
            week: '1 неделя',
            text: 'Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam.',
            doc1: 'Лекция 1.pdf',
            doc2: 'Лекция 1.pdf',
            doc3: 'Лекция 1.pdf',
            test: 'Тест1',
            homeTask: 'Загрузить дз'
        },  
        {
          week: '1 неделя',
          text: 'Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam.',
          doc1: 'Лекция 1.pdf',
          doc2: 'Лекция 1.pdf',
          doc3: 'Лекция 1.pdf',
          test: 'Тест1',
          homeTask: 'Загрузить дз'
      },
    ];

    return (
        <TasksWrapper>
            <Text color={'#000'} fontWeight={'600'} fontSize={'30px'} lineHeight={'50px'}>Философия</Text>
            {tasks.map((task, index) => (
                <TaskCard
                    key={index}
                    week={task.week}
                    text={task.text}
                    doc1={task.doc1}
                    doc2={task.doc2}
                    doc3={task.doc3}
                    test={task.test}
                    homeTask={task.homeTask}
                />
            ))}
        </TasksWrapper>
    );
};

export default TasksPage;
