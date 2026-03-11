// import type { Daily } from "../../types/daily";
import "./DailyCard.css"
// type Props = {
//     daily: Daily;
// }

export const DailyCard = () => {
    return (
        <div className="DailyCard" style={{border:`2px solid #9EE37D`}}>
            <div className="date">
                <p className="month">3月</p>
                <p className="day"  style={{background:"#9EE37D"}}>15</p>
            </div>
            <div className="content">
                <div className="title">
                    <h2>楽しかった日</h2>
                </div>
                <div className="memo">
                    <p>今日は友達と遊んで楽しかった！</p>
                </div>
            </div>
        </div>
    )
}