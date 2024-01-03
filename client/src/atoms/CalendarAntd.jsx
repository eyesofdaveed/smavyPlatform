import React from 'react';
import { Calendar, theme } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';
import moment from 'moment'; 
import 'moment/locale/ru'; // Импортируем русскую локаль для moment

moment.locale('ru');

const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};
export const CalendarAntd = () => {
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  return (
    <div style={wrapperStyle}>
      <Calendar fullscreen={false} onPanelChange={onPanelChange} locale={ruRU} />
    </div>
  );
};