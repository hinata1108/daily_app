import {Link} from 'react-router-dom'
import './footer.css'
export const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer-content">
            <Link to="/home" className="footer-link">
            <img src="home.svg" alt="Home" className="footer-icon" />
            
            </Link>
            <Link to="/write" className="footer-link">
            <img src="write.svg" alt="Write" className="footer-icon" />
            </Link>
            <Link to="/calendar" className="footer-link">
            <img src="calendar.svg" alt="Calendar" className="footer-icon" />
            </Link>
        </div>
    </footer>
    )
}
