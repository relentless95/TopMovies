import React from 'react'
import { useState } from 'react'

const Switch = ({dayWeek, setDayWeek}) => {
  return (
    <div className='switch-container display'>
        <div className="trending-switch">
            <span onClick={()=>{setDayWeek("day")}}
            className={dayWeek === 'day' ? 'active-switcher' : ''}>
                Today
            </span>
            <span onClick={()=>{setDayWeek("week")}}
            className={dayWeek === 'day' ? 'active-switcher' : ''}>
                This Week
            </span>
        </div>
    </div>
  )
}

export default Switch