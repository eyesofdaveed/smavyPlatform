import React, { useState } from 'react';
import {
  Calendar,
  Header,
  HeaderButton,
  HeaderTitle,
  DaysOfWeek,
  DayOfWeek,
  CalendarGrid,
  CalendarDay,
  SelectedDayText,
  Notification,
  NotificationTime,
  NotificationTitle,
  NotificationsContainer,
  NotificationType,
  EmptyDay,
} from '../atoms/StyledComponentsCalendar'; 

export const SubjectTimeTable = () => {
  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentDay, setCurrentDay] = useState(new Date().getDate());
  const [currentMonth, setCurrentMonth] = useState(
    months[new Date().getMonth()],
  );
  const [notifications] = useState([
    { date: new Date(), time: '8:00-8:50', title: 'Философия', type: 'Лекция' },
    {
      date: new Date(),
      time: '9:00-9:50',
      title: 'Математика',
      type: 'Практика',
    },
  ]);

  const getDaysInMonth = date => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return new Date(year, month, 0).getDate();
  };

  const onDayClick = day => {
    const newSelectedDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      day,
    );
    setSelectedDate(newSelectedDate);
    setCurrentDay(day);
    setCurrentMonth(months[newSelectedDate.getMonth()]);
  };

  const renderNotifications = () => {
    return notifications
      .filter(
        notification =>
          notification.date.getDate() === selectedDate.getDate() &&
          notification.date.getMonth() === selectedDate.getMonth() &&
          notification.date.getFullYear() === selectedDate.getFullYear(),
      )
      .map((notification, index) => (
        <Notification key={index}>
          <NotificationTime>{notification.time}</NotificationTime>
          <NotificationTitle>{notification.title}</NotificationTitle>
          <NotificationType>{notification.type}</NotificationType>
        </Notification>
      ));
  };

  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(selectedDate);
    const firstDayOfMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1,
    );
    const startingDay = firstDayOfMonth.getDay();

    let calendar = [];
    for (let i = 0; i < startingDay; i++) {
      calendar.push(<EmptyDay key={`empty-${i}`} />);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      calendar.push(
        <CalendarDay
          key={day}
          isSelected={day === currentDay}
          onClick={() => onDayClick(day)}
        >
          {day}
        </CalendarDay>,
      );
    }
    return calendar;
  };

  return (
    <Calendar>
      <Header>
        <HeaderButton
          onClick={() =>
            setSelectedDate(
              new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1),
            )
          }
        >
          &#9664;
        </HeaderButton>
        <HeaderTitle>
          {`${months[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`}
        </HeaderTitle>
        <HeaderButton
          onClick={() =>
            setSelectedDate(
              new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1),
            )
          }
        >
          &#9654;
        </HeaderButton>
      </Header>
      <DaysOfWeek>
        {daysOfWeek.map((day, index) => (
          <DayOfWeek key={index}>{day}</DayOfWeek>
        ))}
      </DaysOfWeek>
      <CalendarGrid>{generateCalendar()}</CalendarGrid>
      <SelectedDayText>
        {`Сегодня, ${currentDay} ${currentMonth}`}
      </SelectedDayText>
      <NotificationsContainer>{renderNotifications()}</NotificationsContainer>
    </Calendar>
  );
};
