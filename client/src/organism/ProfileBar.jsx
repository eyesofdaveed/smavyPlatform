import React, { useState } from 'react';
import styled from 'styled-components';

import { Flexbox, Text } from '@atoms';
import { sizes, colors } from '@base';
import { PersonalData } from './PersonalData';
import { SpecialtyCard } from './SpecialtyCard';

const TabBar = styled(Flexbox)`
  position: relative;
//   border-bottom: 2px solid ${colors.lightGrey};
//   margin-bottom :300px;
`;
const Bar = styled.div`
 margin-bottom:70px;
`;

const ActiveIndicator = styled.div`
  height: 6px;
  width: calc(100% / 5); // Установите ширину в соответствии с количеством вкладок
  background-color: ${colors.activeBlue}; // Цвет индикатора
  position: absolute;
  margin-top: 30px;
  left: ${({ activeIndex }) => `${activeIndex * (100 / 5)}%`}; // Вычислите левый отступ
  margin-left: 400px;

  transition: left 0.3s ease;
`;

const Tab = styled.button`
  background-color: transparent;
  border: none;
  font-size: ${sizes.medium};
  margin-left: 10px;
  cursor: pointer;
  padding: 10px 0;
  &:hover {
    background-color: transparent;
  }
  &:focus {
    outline: none; // Удалите стандартный outline при фокусе
  }
`;

export const ProfileBar = () => {
  const tabs = ['Личные данные', 'Сведения о специальности', 'Контактная информация', 'Сведения об образовании', 'Внутренние документы'];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const activeIndex = tabs.indexOf(activeTab);

  return (
    <>
      <TabBar justify="space-between" width="100%">
        
      <ActiveIndicator activeIndex={activeIndex} />
        {tabs.map((tab, index) => (
        <Bar>
          <Tab
            key={tab}
            onClick={() => setActiveTab(tab)}
            isActive={activeTab === tab}
          >
            {tab}
          </Tab>
          </Bar>
        ))}
      </TabBar>

      {activeTab === tabs[0] && <PersonalData />}
      {activeTab === tabs[1] && <SpecialtyCard />}
      {/* Добавьте оставшиеся условные рендеринги для других вкладок */}
    </>
  );
};
