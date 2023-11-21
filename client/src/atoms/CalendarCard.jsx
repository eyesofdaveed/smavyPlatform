import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import CheckIcon from '@mui/icons-material/Check';

const styles = {
  root: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '2rem',
    textAlign: 'center',
  },
  headerText: {
    textTransform: 'uppercase',
    marginBottom: '2rem',
    color: 'orange',
  },
  pickerWrapper: {
    boxShadow: '3px 2px 10px 5px #888888',
  },
  dialogActions: {
    display: 'none',
  },
  toolbar: {
    padding: 0,
  },
  toolbarContent: {
    justifyContent: 'center',
    backgroundColor: 'orange',
    padding: '1rem',
  },
  typography: {
    display: 'none',
  },
  selectedDay: {
    backgroundColor: 'orange',
  },
  unselectedDay: {
    borderColor: 'transparent',
    color: 'orange',
  },
  badge: {
    color: 'green',
  },
  additionalWrapperStyles: {
    backgroundColor: '#f4f4f4',
    marginBottom: '1rem',
  },
};

const cssString = Object.keys(styles).map((key) => {
  const styleObj = styles[key];
  const styleString = Object.keys(styleObj).map((prop) => {
    return `${prop}: ${styleObj[prop]};`;
  }).join('');

  return `.${key} { ${styleString} }`;
}).join('');

const CalendarCard = () => {
  const [value, setValue] = useState(new Date());
  const [highlightedDays, setHighlightedDays] = useState([1, 2, 13]);

  return (
    <div>
      <style>{cssString}</style>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          variant='static'
          orientation='portrait'
          value={value}
          disableFuture
          onChange={(newValue) => setValue(newValue)}
          renderInput={(params) => (
            <TextField {...params} />
          )}
          renderDay={(day, _value, DayComponentProps) => {
            const isSelected =
              !DayComponentProps.outsideCurrentMonth &&
              highlightedDays.indexOf(day.getDate()) >= 0;

            return (
              <Badge
                key={day.toString()}
                overlap='circular'
                badgeContent={isSelected ? <CheckIcon color='red' /> : undefined}
              >
                <PickersDay {...DayComponentProps} />
              </Badge>
            );
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default CalendarCard;
