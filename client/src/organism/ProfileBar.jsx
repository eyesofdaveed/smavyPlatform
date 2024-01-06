import React, { useState } from 'react';
import styled from 'styled-components';

import { Flexbox } from '@atoms';
import { sizes, colors } from '@base';
import { PersonalData } from './PersonalData';
import { SpecialtyCard } from './SpecialtyCard';

const Bar = styled.div`
  // margin-bottom: 500px;
`;

const ActiveIndicator = styled.div`
  height: 6px;
  width: calc( 100% / 5 );
  background-color: ${colors.activeBlue};
  position: absolute;
  margin-top: 50px;
  left: ${({ activeIndex }) => `${activeIndex * (100 / 5)}%`};
  transition: left 0.3s ease;
  border-radius: 10px;
`;

const Tab = styled.button`
  background-color: transparent;
  border: none;
  font-size: ${({ fontSize }) => fontSize || sizes.medium};
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px; 

  cursor: pointer;
  padding: 10px 0;
  &:hover {
    background-color: transparent;
  }
  &:focus {
    outline: none;
  }
`;

export const ProfileBar = () => {
  const tabs = [
    { name: 'Личные данные', fontSize: '18px' },
    { name: 'Сведения о специальности', fontSize: '18px' },
    { name: 'Контактная информация', fontSize: '18px' },
    { name: 'Сведения об образовании', fontSize: '18px' },
    { name: 'Внутренние документы', fontSize: '18px' },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const activeIndex = tabs.findIndex(tab => tab.name === activeTab);

  return (
    <>
      <Flexbox justify={'space-between'} width={'100%'} position={'relative'}>
        <ActiveIndicator activeIndex={activeIndex} />
        {tabs.map((tab, index) => (
          <Bar key={tab.name}>
            <Tab
              onClick={() => setActiveTab(tab.name)}
              isActive={activeTab === tab.name}
              fontSize={tab.fontSize} 
            >
              {tab.name}
            </Tab>
          </Bar>
        ))}
      </Flexbox>

      {activeTab === 'Личные данные' && <PersonalData />}
      {activeTab === 'Сведения о специальности' && <SpecialtyCard />}
      {/* Добавьте оставшиеся условные рендеринги для других вкладок */}
    </>
  );
};
