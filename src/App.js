import React from 'react'
import Calendar from './Calendar'
import DatePicker from './Datepicker'
import './index.css';

function App() {
  return (
    <div className='container'>
      <div>
        <h1> Calendar</h1>
        <Calendar />
      </div>
      <div>
        <h1> Datepicker</h1>
        <DatePicker />
      </div>
    </div>
  )
}

export default App