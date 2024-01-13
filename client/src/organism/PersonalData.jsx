import React, { useState, useEffect } from 'react';

import { Flexbox } from '@atoms';
import { Text } from '@atoms';
import { Card } from '@atoms';
import { colors } from '@base';
import { ValueBackround } from '../atoms';



export const PersonalData = () => {

  const [iin, setIin] = useState(''); 

  useEffect(() => {
    const savedIin = localStorage.getItem('iin');
    if (savedIin) {
      setIin(savedIin);
    }
  }, []);

  const handleIinChange = (event) => {
    const newValue = event.target.value;
    if (/^\d*$/.test(newValue) && newValue.length <= 12) {
      setIin(newValue);
      localStorage.setItem('iin', newValue); 
    }
  };

  return (
    <> 
      <Text fontWeight={500} color={colors.black} fontSize={'28px'} textAlign={'left'}>Персональные сведения</Text>
      <Card padding="32px 60px 32px 20px" display="flex" width="fit-content" bgColor={colors.cardMainBg} borderRadius={'19px'}>
        <Flexbox direction="column" gap="30px" align="start">
          <Flexbox justify="space-between" width="100%">
            <Text fontWeight={400}  color={colors.black} fontSize={'19px'} >ИИН</Text>
            <ValueBackround margin="0px 3px 0px 10px" padding="8px 20px ">
            <input
                value={iin}
                onChange={handleIinChange}
                type="text"
                style={{ 
                  border: 'none',
                  outline: 'none', 
                  backgroundColor: 'transparent',
                  color: colors.black,
                  fontSize: '19px',
                  
                }}
              />
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
