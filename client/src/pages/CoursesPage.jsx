import React, { useState } from 'react';
import styled from 'styled-components';

import { CoursesSubject, Text, Input } from '@atoms';
import { Modal } from '@organism';

const PageWrapper = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 100%;

    @media screen and (max-width: 1620px) {
        padding: 20px;
    }
`;

const AddButton = styled.button`
    width: 50px;
    height: 50px;
    position: absolute;
    right: 20px;
    background: #2E5BF0;
    color: #fff;
    border: none;
    border-radius: 50px;
    font-size: 32px;
    transition: transform 0.2s ease;

    &:hover{
        background-color: #2E5BF0;
        transform: scale(1.1);
    }
`;

const Inputs = styled.div`
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

const InputModal = styled.input`
    width: 45%;
    height: 40px;
    padding: 0px 10px;
    border-radius: 30px;
    border-color: #ccc;
    font-size: 18px;
`;

const DarkOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
    display: ${props => props.show ? 'block' : 'none'};
`;

const CoursesPage = () => {

    const [subjectsData, setSubjectsData] = useState([
        {
            name: 'Философия',
            teacher: 'Фио преподавателя',
            period: 'Текущая неделя - 3',
            task: 'Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas.',
        },
        {
            name: 'Философия',
            teacher: 'Фио преподавателя',
            period: 'Текущая неделя - 3',
            task: 'Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas.',
        },
        {
            name: 'Философия',
            teacher: 'Фио преподавателя',
            period: 'Текущая неделя - 3',
            task: 'Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas.',
        },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const [newCourse, setNewCourse] = useState({
        name: '',
        teacher: '',
        period: '',
        task: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewCourse((prevCourse) => ({
            ...prevCourse,
            [name]: value,
        }));
    };

    const saveData = () => {
        const updatedSubjectsData = [...subjectsData, newCourse];
        closeModal();
        setNewCourse({
            name: '',
            teacher: '',
            period: '',
            task: '',
        });
        setSubjectsData(updatedSubjectsData);
    };

    return (
        <PageWrapper>
            <AddButton onClick={openModal}>+</AddButton>
            <DarkOverlay show={isModalOpen} onClick={closeModal} />
            {/* <ModalCourse show={isModalOpen}> 
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
            </ModalCourse> */}

            <Modal show={isModalOpen} closeModal={closeModal} handleInputChange={handleInputChange} newCourse={newCourse} saveData={saveData} TextModal={'Добавить курс'}>
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
            </Modal>
            {subjectsData.map((subject, index) => (
                <CoursesSubject
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
