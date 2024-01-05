import React, { useState } from 'react'
import './index.css'

const Calendar = ({ onhandleSelectDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDay, setSelectedDay] = useState(null)
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate()

  const handlePrevClick = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        currentDate.getDate()
      )
    )
  }

  const handleNextClick = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        currentDate.getDate()
      )
    )
  }

  const handleDayClick = (day) => {
    setSelectedDay(day)
    const newDate = new Date(currentDate)
    newDate.setDate(day)
    const formattedDate = newDate.toISOString().split('T')[0]
    onhandleSelectDate && onhandleSelectDate(formattedDate)
  }

  const renderCalendar = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const daysInMonth = getDaysInMonth(year, month)

    const days = []

    for (let i = 1; i > 0; i--) {
      days.push(
        <div key={`prev-${i}`} className='day inactiveDay'>
          {getDaysInMonth(year, month - 1) - i + 1}
        </div>
      )
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div
          key={i}
          className='day'
          style={{
            ...(i === selectedDay && {
              color: 'white',
              backgroundColor: '#ff5353',
              borderRadius: '100%',
            }),
          }}
          onClick={() => handleDayClick(i)}
        >
          {i}
        </div>
      )
    }

    const remainingDays = 42 - days.length
    for (let i = 1; i <= remainingDays; i++) {
      days.push(
        <div key={`next-${i}`} className='day inactiveDay'>
          {i}
        </div>
      )
    }
    return days
  }

  return (
    <>
      <div className='calendar'>
        <div className='header'>
          <div className='nav' onClick={handlePrevClick}>
            {'<'}
          </div>
          <div className='month'>
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </div>
          <div className='nav' onClick={handleNextClick}>
            {'>'}
          </div>
        </div>
        <div className='days'>
          <div className='day'>Sun</div>
          <div className='day'>Mon</div>
          <div className='day'>Tue</div>
          <div className='day'>Wed</div>
          <div className='day'>Thu</div>
          <div className='day'>Fri</div>
          <div className='day'>Sat</div>
        </div>
        <div className='calendarGrid'>{renderCalendar()}</div>
      </div>
    </>
  )
}

export default Calendar
