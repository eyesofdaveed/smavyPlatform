import React from 'react';
import styled from 'styled-components';

import { Flexbox } from '@atoms';
import { Text } from '@atoms';
import { Card } from '@atoms';
import { sizes,colors } from '@base';
import { ValueBackround } from '../atoms';

export const PersonalData = () => {
  return (
    <Card padding="30px" display="flex" width="fit-content" bgColor={colors.cardMainBg} >
      <Flexbox direction="column" gap="22px" align="start">
        <Flexbox justify="space-between" width="100%">
          <Text  color={colors.black} fontSize={sizes.medium} >ИИН</Text>
          <ValueBackround margin="0px 3px 0px 10px" padding="2px 15px ">
            <Text  color={colors.black} fontSize={sizes.medium} >010722547645</Text>
          </ValueBackround>
        </Flexbox>
        <Flexbox justify="space-between" width="100%">
          <Text  color={colors.black} fontSize={sizes.medium} >
            Дата рождения
          </Text>
          <ValueBackround margin="0px 3px 0px 10px" padding="2px 15px ">
            <Text color={colors.black} fontSize={sizes.medium}>22-07-2001</Text>
          </ValueBackround >
        </Flexbox>
        <Flexbox justify="space-between" width="100%">
          <Text  color={colors.black} fontSize={sizes.medium} >Пол</Text>
          <ValueBackround margin="0px 3px 0px 10px" padding="2px 15px ">
            <Text  color={colors.black} fontSize={sizes.medium}>Женский</Text>
          </ValueBackround>
        </Flexbox>
      </Flexbox>
    </Card>
  );
};
