import React from 'react';
import styled from 'styled-components';

import { Flexbox } from '@atoms';
import { Text } from '@atoms';
import { Card } from '@atoms';
import { sizes } from '@base';
import { colors } from '@base';
// import contrastData from '../../.././contracts.json';

export const ValueBackround = styled.div`
  background-color: ${colors.white};
  border-radius: 18px;
  padding: 2px 10px;
  margin-left:10px; 
  margin-right:30px;
  width: 300px;
  @media (max-width: 600px) {
    width: 100%;
    margin: 10px 0;
  }
`;

export const PersonalData = () => {
  return (
    <Card padding="30px" display="flex" width="fit-content" bgColor={colors.cardMainBg} >
      <Flexbox direction="column" gap="22px" align="start">
        <Flexbox justify="space-between" width="100%">
          <Text color= 'black'fontSize={sizes.medium} >ИИН</Text>
          <ValueBackround>
            <Text fontSize={sizes.medium} color= 'black'>010722547645</Text>
          </ValueBackround>
        </Flexbox>
        <Flexbox justify="space-between" width="100%">
          <Text color= 'black' fontSize={sizes.medium} >
            Дата рождения
          </Text>
          <ValueBackround>
            <Text color= 'black' fontSize={sizes.medium}>22-07-2001</Text>
          </ValueBackround>
        </Flexbox>
        <Flexbox justify="space-between" width="100%">
          <Text color= 'black' fontSize={sizes.medium} >Пол</Text>
          <ValueBackround>
            <Text color= 'black' fontSize={sizes.medium}>Женский</Text>
          </ValueBackround>
        </Flexbox>
      </Flexbox>
    </Card>
  );
};
