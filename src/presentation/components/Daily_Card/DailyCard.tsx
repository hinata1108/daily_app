import type { Daily } from '../../../types/daily'
import './DailyCard.css'
type Props = {
  daily: Daily
}

export const DailyCard = ({ daily }: Props) => {
  const date = new Date(daily.created_at)
  const month = date.getMonth() + 1
  const day = date.getDate()

  return (
    <div className="DailyCard" style={{ border: `2px solid ${daily.color}` }}>
      <div className="date">
        <p className="month">{month}月</p>
        <p className="day" style={{ background: daily.color }}>
          {day}
        </p>
      </div>
      <div className="content">
        <div className="title">
          <h2>{daily.title}日</h2>
        </div>
        <div className="memo">
          <p>{daily.memo}</p>
        </div>
        <div className="image">
          {daily.imageUrl && <img src={daily.imageUrl} alt="Daily" />}
        </div>
      </div>
    </div>
  )
}
