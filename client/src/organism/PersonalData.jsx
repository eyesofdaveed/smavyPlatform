import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 

import { Flexbox } from '@atoms';
import { Text } from '@atoms';
import { Card } from '@atoms';
import { colors } from '@base';
import { ValueBackround } from '../atoms';

export const PersonalData = () => {
  const [iin, setIin] = useState('');
  const [gender, setGender] = useState('Женский');
  const [birthDate, setBirthDate] = useState(''); 

  useEffect(() => {
    const savedIin = localStorage.getItem('iin');
    const savedGender = localStorage.getItem('gender');
    const savedBirthDate = localStorage.getItem('birthDate') || '2001-07-22';
    setBirthDate(savedBirthDate);

    if (savedIin) {
      setIin(savedIin);
    }

    if (savedGender) {
      setGender(savedGender);
    }
  }, []);

  const handleIinChange = event => {
    const newValue = event.target.value;
    if (/^\d*$/.test(newValue) && newValue.length <= 12) {
      setIin(newValue);
      localStorage.setItem('iin', newValue);
    }
  };

  const handleGenderChange = event => {
    const newGender = event.target.value;
    setGender(newGender);
    localStorage.setItem('gender', newGender);
  };

  const handleBirthDateChange = event => {
    const newDate = event.target.value;
    setBirthDate(newDate);
    localStorage.setItem('birthDate', newDate);
  };

  return (
    <>
      <Text
        fontWeight={500}
        color={colors.black}
        fontSize={'28px'}
        textAlign={'left'}
      >
        Персональные сведения
      </Text>
      <Card
        padding="32px 60px 32px 20px"
        display="flex"
        width="fit-content"
        bgColor={colors.cardMainBg}
        borderRadius={'19px'}
      >
        <Flexbox direction="column" gap="30px" align="start">
          <Flexbox justify="space-between" width="100%">
            <Text fontWeight={400} color={colors.black} fontSize={'19px'}>
              ИИН
            </Text>
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
            <Text fontWeight={400} color={colors.black} fontSize={'19px'}>
              Дата рождения
            </Text>
            <ValueBackround margin="0px 3px 0px 10px" padding="8px 20px">
              <input
                type="date"
                value={birthDate}
                onChange={handleBirthDateChange}
                style={{
                  border: 'none',
                  outline: 'none',
                  backgroundColor: 'transparent',
                  color: colors.black,
                  fontSize: '19px',
                  cursor: 'pointer',
                  width: ' 300px',
                }}
              />
            </ValueBackround>
          </Flexbox>
          <Flexbox justify="space-between" width="100%">
            <Text fontWeight={400} color={colors.black} fontSize={'19px'}>
              Пол
            </Text>
            <ValueBackround
              margin="0px 3px 0px 10px"
              padding="8px 20px"
              style={{ width: '100%' }}
            >
              <select
                value={gender}
                onChange={handleGenderChange}
                style={{
                  border: 'none',
                  outline: 'none',
                  backgroundColor: 'transparent',
                  color: colors.black,
                  fontSize: '19px',
                  width: '100%',
                  cursor: 'pointer',
                  '-webkit-appearance': 'none',
                  '-moz-appearance': 'none',
                  appearance: 'none',
                }}
              >
                <option value="Женский">Женский</option>
                <option value="Мужской">Мужской</option>
              </select>
            </ValueBackround>
          </Flexbox>
        </Flexbox>
      </Card>
    </>
  );
};
