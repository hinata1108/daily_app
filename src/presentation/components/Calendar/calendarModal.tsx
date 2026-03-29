import type { Daily } from '../../../types/daily'
import './calendarModal.css'

type DailyModalProps={ 
    daily: Daily;
    onClose: () => void;
}

export const CalendarModal: React.FC<DailyModalProps> = ({daily, onClose}: DailyModalProps) => {
    return (
        <div className="modal-overlay"  onClick={onClose}>

            <div className="modal-content" style={{border: `3px solid ${daily.color} `,borderRadius: '20px'}}onClick={(e)=>e.stopPropagation()}>
                <div className="modal-title">
                    <h2>{daily.title}日</h2>
                </div>
                <div className="modal-body">
                    <div className="modal-image">
                        {daily.imageUrl && <img src={daily.imageUrl} alt="Daily" />}
                    </div>
                        <div className="modal-memo">
                            <p>{daily.memo}</p>
                        </div>
                </div>
                <button onClick={onClose} className="modal-close">閉じる</button>
            </div>
        </div>
    )
}
