import React from 'react';
import styled from 'styled-components';
import { AddButton} from './CoursesPage'
import { DisciplinesCard } from '@atoms'
import { Flexbox } from '@atoms'

const PageWrapper = styled.div`
  position:relative;
  display: grid;
  gap: 20px;
`;

const GradeBookPage = () => {
    return (
        <PageWrapper>
        <AddButton>+</AddButton>
        <Flexbox direction='column' margin='70px 0'>
            <DisciplinesCard
                title={"Lorem ipsum dolor sit amet consectetur"}
                text={"Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. Risus praesent morbi faucibus ultricies a tristique etiam imperdiet ac."}
            />
        </Flexbox>

        <DarkOverlay show={isModalOpen} onClick={closeModal} />
            <ModalCourse show={isModalOpen}> 
                <CloseModal onClick={closeModal}>X</CloseModal>
                <Text color={'#000'} fontSize={'36px'} fontWeight={'600'}>Добавить Курс</Text>
                <Inputs>
                <InputModal
                type="text"
                name="name"
                value={newCourse.name}
                onChange={handleInputChange}
                placeholder='Название курса'
                />
                <InputModal
                type="text"
                name="teacher"
                value={newCourse.teacher}
                onChange={handleInputChange}
                placeholder='Фио преподавателя'
                />
                <InputModal
                type="text"
                name="period"
                value={newCourse.period}
                onChange={handleInputChange}
                placeholder='Eще что-то'
                />
                </Inputs>
                <SaveButton onClick={saveData}>Сохранить</SaveButton>
            </ModalCourse>
        </PageWrapper>
    )
};

export default GradeBookPage;