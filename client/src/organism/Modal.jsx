import React from 'react';
import styled from 'styled-components';

import { Text } from '@atoms'

const ModalContainer = styled.div`
    position: absolute;
    width: 96%;
    height: 60vh;
    background-color: #fff;
    border-radius: 32px;
    box-shadow: 1px 2px 8px 0px #00000026;
    display: ${props => props.show ? 'block' : 'none'}; 
    padding: 50px;
    z-index: 20;
`;

const CloseModal = styled.button`
    width: 50px;
    height: 50px;
    position: absolute;
    right: 20px;
    background: transparent;
    color: #2E5BF0;
    border: none;
    border-radius: 50px;
    font-size: 32px;
    transition: transform 0.2s ease;
    margin-top: -30px;

    &:hover{
        background-color: #2E5BF0;
        transform: scale(1.1);
    }
`;

const SaveButton = styled.button`
    background: #2E5BF0;
    color: #fff;
    font-size: 18px;
    border: none;
    border-radius: 32px;
    padding: 10px 40px;
    margin-top: 40px;
`;

export const Modal = ({ show, closeModal, handleInputChange, newCourse, saveData, TextModal, children }) => {
    return (
        <ModalContainer show={show}>
            <CloseModal onClick={closeModal}>X</CloseModal>
            <Text color={'#000'} fontSize={'36px'} fontWeight={'600'}>{TextModal}</Text>
            {children}
            <SaveButton onClick={saveData}>Сохранить</SaveButton>
        </ModalContainer>
    );
};

