import React, { useState } from 'react';

import styled from 'styled-components';

import { Flexbox } from '@atoms';
import { sizes } from '@base/index';
import { colors } from '@base';

const PersonalDataCard = styled.div`
  background-color: ${colors.personalDataCardBg};
  border-radius: 30px;
  padding: 2%;
  display: flex;
  width: fit-content;

  
`;

const PersonalDataCardText = styled.div`
  background-color: ${colors.white};
  border-radius: 18px;
  padding: 10px;
  width: 300px;
  // display: flex;
  // justify-content: space-between;
`;

const TextOfPerson = styled.p`
  font-weight: 400;
  line-height: 22px;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '18px')};
  color: #000000;
  // white-space: nowrap;
  
`;

const PersonalData = () => {
  return (
    <PersonalDataCard>
      <Flexbox direction="column" gap="22px" align="start">
        <Flexbox justify="space-between" width="100%">
          <TextOfPerson fontSize={sizes.medium}>ИИН</TextOfPerson>
          <PersonalDataCardText>
            <TextOfPerson fontSize={sizes.medium}>
            010722547645
            </TextOfPerson>
          </PersonalDataCardText>
        </Flexbox>
        <Flexbox justify="space-between" width="100%">
          <TextOfPerson fontSize={sizes.medium} style={{ marginRight: '15px' }}>Дата рождения</TextOfPerson>
          <PersonalDataCardText>
            <TextOfPerson fontSize={sizes.medium}>
            22-07-2001
            </TextOfPerson>
          </PersonalDataCardText>
        </Flexbox>
        <Flexbox justify="space-between" width="100%">
          <TextOfPerson fontSize={sizes.medium}>Пол</TextOfPerson>
          <PersonalDataCardText>
            <TextOfPerson fontSize={sizes.medium}>
            Женский
            </TextOfPerson>
          </PersonalDataCardText>
        </Flexbox>
      </Flexbox>
    </PersonalDataCard>
  );
};

export default PersonalData;

