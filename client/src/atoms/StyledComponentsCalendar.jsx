import styled from 'styled-components';

export const Calendar = styled.div`
  width: 300px;
  height: auto;   
  box-shadow: 1px 2px 8px 0px #00000026;
  border-radius: 20px;
  padding: 30px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 0.5px solid #333;
`;

export const HeaderButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

export const HeaderTitle = styled.p`
  font-weight: 500;
  font-size: 1.5rem;
  display: flex; 
  align-items: center; 
`;

export const DaysOfWeek = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const DayOfWeek = styled.div`
  font-size: 0.95rem;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`;

export const CalendarDay = styled.div`
  border-radius: 30px;
  color: #333;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${props => props.isSelected ? '#B6EEC3' : 'transparent'};
`;

export const SelectedDayText = styled.div`
  font-size : 24px;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 8px;
  font-weight: 600;
`;

export const Notification = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const NotificationTime = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const NotificationTitle = styled.div`
  margin-bottom: 2px;
  flex: 1;
`;

export const NotificationType = styled.div`
  align-self: flex-end;
  background-color: #B6EEC3;
  border-radius: 50px;
  padding: 5px 8px;
`;

export const NotificationsContainer = styled.div`
  padding: 10px;
  max-height: 200px;
  overflow-y: auto;
`;

export const EmptyDay = styled.div`
  visibility: hidden;
`;