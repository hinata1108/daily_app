import type { Daily } from '../../../types/daily'
import './DailyCard.css'
type Props = {
  daily: Daily
}

export const DailyCard = ({ daily }: Props) => {
  const date = new Date(daily.createdAt)
  const month = date.getMonth() + 1
  const day = date.getDate()

  return (
    <div className="DailyCard" style={{ border: `2px solid #9EE37D` }}>
      <div className="date">
        <p className="month">{month}月</p>
        <p className="day" style={{ background: '#9EE37D' }}>
          {day}
        </p>
      </div>
      <div className="content">
        <div className="title">
          <h2>{daily.title}</h2>
        </div>
        <div className="memo">
          <p>{daily.memo}</p>
        </div>
      </div>
    </div>
  )
}
