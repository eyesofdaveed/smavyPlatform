import React from 'react';
import styled from 'styled-components';

import { colors } from '@base';
import CloudImg from '@assets/img/cloud.png';
import { Text } from './Text';

export const HomeTasksCardStyle = styled.div`
    background-color: ${colors.taskCardBg};
    display: grid;
    padding: 40px;
    border-radius: 24px;
    gap: 10px;

    @media screen and (max-width: 550px){
        padding: 20px;
    }
`;

export const SendButton = styled.button`
    background-color: transparent;
    padding: 10px;
    color: #2E5BF0;
    border-radius: 16px;
    border: #2E5BF0 solid 2px;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    margin-left: 42%;
    margin-right: 42%;

    @media screen and (max-width: 550px){
        margin-left: 0%;
        margin-right: 0%;
    }
`;

const FileInputWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;
  width: 100%;
`;

const FileInputLabel = styled.label`
  border: 1px dashed #498098;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  background-color: ${colors.taskCardBg};
  text-align: center;
  margin: 40px 0;
  padding: 100px 0;
  cursor: pointer;
  gap: 10px;

  @media screen and (max-width: 550px){
    margin: 20px 0;
    padding: 50px 0;
  }
`;

const HiddenFileInput = styled.input`
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const HomeTaskCard = ({ text, date, deadline }) => {
    return (
        <HomeTasksCardStyle>
            <Text color={'#000'} fontSize={'20px'} fontWeight={'400'} lineHeightPhone={'22px'}>{text}</Text>
            <Text color={'#000'} fontSize={'20px'} fontWeight={'400'} lineHeight={'40px'} lineHeightPhone={'22px'}>Дедлайн - {date}</Text>
            <Text color={'#3FC500'} fontSize={'20px'} fontWeight={'400'} lineHeightPhone={'22px'}>До конца дедлайна осталось: {deadline}</Text>
            <FileInputWrapper>
                <FileInputLabel htmlFor="file-input">
                    <img src={CloudImg} />
                    Нажмите чтобы перетащить и загрузить файл
                </FileInputLabel>
                <HiddenFileInput id="file-input" type='file' />
            </FileInputWrapper>
            <SendButton>Отправить</SendButton>
        </HomeTasksCardStyle>
    );
};
