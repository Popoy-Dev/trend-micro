import React, { useState } from 'react';
import Calendar from './Calendar';

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleCalendarToggle = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setIsCalendarOpen(false);
  };
  return (
    <div>
      <input
        type="input"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)} 
        onClick={handleCalendarToggle}
        placeholder="YYYY-MM-DD"
      />
      {isCalendarOpen && (
        <div>
          <Calendar onhandleSelectDate={handleDateSelect}/>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
