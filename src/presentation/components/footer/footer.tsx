import {Link} from 'react-router-dom'
import './footer.css'
export const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer-content">
            <Link to="/home" className="footer-link">ホーム</Link>
            <Link to="/write" className="footer-link">投稿</Link>
            <Link to="/calender" className="footer-link">カレンダー</Link>
        </div>
    </footer>
    )
}
