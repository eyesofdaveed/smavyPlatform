import React from 'react';

import { Flexbox } from '@atoms';
import { Text } from '@atoms';
import { Card } from '@atoms';
import { sizes,colors } from '@base';
import { ValueBackround } from '../atoms';

export const PersonalData = () => {
  return (
    <> 
      <Text fontWeight={500} color={colors.black} fontSize={'30px'} textAlign={'left'}>Персональные сведения</Text>
      <Card padding="32px 60px 32px 20px" display="flex" width="fit-content" bgColor={colors.cardMainBg} borderRadius={'19px'}>
        <Flexbox direction="column" gap="30px" align="start">
          <Flexbox justify="space-between" width="100%">
            <Text fontWeight={400}  color={colors.black} fontSize={'19px'} >ИИН</Text>
            <ValueBackround margin="0px 3px 0px 10px" padding="8px 20px ">
              <Text fontWeight={400} color={colors.black} fontSize={'19px'} >010722547645</Text>
            </ValueBackround>
          </Flexbox>
          <Flexbox justify="space-between" width="100%">
            <Text fontWeight={400} color={colors.black} fontSize={'19px'} >
              Дата рождения
            </Text>
            <ValueBackround margin="0px 3px 0px 10px" padding="8px 20px ">
              <Text fontWeight={400} color={colors.black} fontSize={'19px'}>22-07-2001</Text>
            </ValueBackround >
          </Flexbox>
          <Flexbox justify="space-between" width="100%">
            <Text fontWeight={400} color={colors.black} fontSize={'19px'} >Пол</Text>
            <ValueBackround margin="0px 3px 0px 10px" padding="8px 20px ">
              <Text fontWeight={400} color={colors.black} fontSize={'19px'}>Женский</Text>
            </ValueBackround>
          </Flexbox>
        </Flexbox>
      </Card>
    </>
  );
};
