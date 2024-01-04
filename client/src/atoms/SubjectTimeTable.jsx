import React, { useState } from 'react';

export const SubjectTimeTable = () => {
  const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentDay, setCurrentDay] = useState(new Date().getDate());
  const [currentMonth, setCurrentMonth] = useState(months[new Date().getMonth()]);
  const [notifications] = useState([
    { date: new Date(), time: '8:00-8:50', title: 'Философия', type: 'Лекция' },
    { date: new Date(), time: '9:00-9:50', title: 'Математика', type: 'Практика' },
  ]);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return new Date(year, month, 0).getDate();
  };

  const onDayClick = (day) => {
    const newSelectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
    setSelectedDate(newSelectedDate);
    setCurrentDay(day);
    setCurrentMonth(months[newSelectedDate.getMonth()]);
  };

  const renderNotifications = () => {
    return notifications
      .filter(notification => 
        notification.date.getDate() === selectedDate.getDate() &&
        notification.date.getMonth() === selectedDate.getMonth() &&
        notification.date.getFullYear() === selectedDate.getFullYear())
      .map((notification, index) => (
        <div key={index} style={styles.notification}>
          <div style={styles.notificationTime}>{notification.time}</div>
          <div style={styles.notificationTitle}>{notification.title}</div>
          <div style={styles.notificationType}>{notification.type}</div>
        </div>
      ));
  };

  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(selectedDate);
    const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const startingDay = firstDayOfMonth.getDay();
    let calendar = [];
    for (let i = 0; i < startingDay; i++) {
      calendar.push(<div key={`empty-${i}`} className="empty-day" style={styles.emptyDay}></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      calendar.push(
        <div key={day} 
             className={`calendar-day${day === currentDay ? ' selected' : ''}`} 
             style={day === currentDay ? {...styles.calendarDay, ...styles.selectedDay} : styles.calendarDay}
             onClick={() => onDayClick(day)}>
          {day}
        </div>
      );
    }
    return calendar;
  };

  const styles = {
    calendar: {
      width: '300px',
      height: 'auto',   
      boxShadow: '1px 2px 8px 0px #00000026' ,
      borderRadius: '20px',
      padding: '30px',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
      paddingBottom: '10px',
      borderBottom: '0.5px solid #333',
    },
    headerButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '20px',
    },
    headerTitle: {
      fontWeight: '500',
      fontSize: '1.5rem',
      display: 'flex', 
      alignItems: 'center', 
    },
    daysOfWeek: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px',
    },
    dayOfWeek: {
      fontSize: '0.95rem',
    },
    calendarGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: '5px',
    },
    calendarDay: {
      borderRadius: '30px',
      color: '#333',
      padding: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    },
    selectedDay: {
      backgroundColor: '#B6EEC3',
      color: 'black',
    },
    selectedDayText: {
      fontSize : '24px',
      marginLeft: '10px',
      marginTop: '10px',
      marginBottom: '8px',
      fontWeight: '600',
    },
    notification: {
      border: '1px solid #e1e1e1',
      borderRadius: '5px',
      padding: '10px',
      marginBottom: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    notificationTime: {
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    notificationTitle: {
      marginBottom: '2px',
      flex :'1' ,
    },
    notificationType: {
      alignSelf: 'flex-end',
      backgroundColor: '#B6EEC3',
      borderRadius: '50px',
      padding: '5px 8px',
    },
    notificationsContainer: {
      padding: '10px',
      maxHeight: '200px',
      overflowY: 'auto'
    },
    
    emptyDay: {
      visibility: 'hidden'
    },
  };

  return (
    <div className="calendar" style={styles.calendar}>
      <div className="header" style={styles.header}>
        <button style={styles.headerButton} onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1))}>
          &#9664;
        </button>
        <h2 style={styles.headerTitle}>
          {`${months[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`}
        </h2>
        <button style={styles.headerButton} onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1))}>
          &#9654;
        </button>
      </div>
      <div className="days-of-week" style={styles.daysOfWeek}>
        {daysOfWeek.map((day, index) => (
          <div key={index} style={styles.dayOfWeek}>
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-grid" style={styles.calendarGrid}>
        {generateCalendar()}
      </div>
      <div className="selected-day-text" style={styles.selectedDayText}>
        {`Сегодня, ${currentDay} ${currentMonth}`}
      </div>
      <div style={styles.notificationsContainer}>
        {renderNotifications()}
      </div>
    </div>
  );
};
