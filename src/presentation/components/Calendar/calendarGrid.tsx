import './calendar.css'
import type { Daily} from '../../../types/daily'

type CalendarGridProps = {
    calendarDays: (number | null)[];
    getDaily: (day: number) => Daily | null| undefined;
};

export const CalendarGrid = ({ calendarDays, getDaily }: CalendarGridProps) => {
    return (
        <div className="CalendarGrid">
            <div className="weekdays">
                <div>日</div>
                <div>月</div>
                <div>火</div>
                <div>水</div>
                <div>木</div>
                <div>金</div>
                <div>土</div>
            </div>
            <div className="days">
                {calendarDays.map((day, index) => {
                    const daily = day ? getDaily(day) : null;
                    return (
                        <div key={index} className="day">
                            {day && <span>{day}</span>}
                            {daily && (
                                <div className="dot" style={{ backgroundColor: daily.color }}></div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}