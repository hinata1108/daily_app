import React from 'react'
import './calendarAnime.css'
type sliderDirection= "left" | "right"|""
type Props={
    children: React.ReactNode;
    direction: sliderDirection;
}

export const CalendarAnime = ({children,direction}:Props) => {
    return (
        <div className="calendar-view">
            <div className={`calendar-slide ${direction}`}>
                {children}
            </div>
        </div>
    )
}