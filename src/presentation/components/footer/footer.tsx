import {Link} from 'react-router-dom'
import './footer.css'
export const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer-content">
            <Link to="/home" className="link">
            <img src="home.svg" alt="Home" className="icon" />
            
            </Link>
            <Link to="/write" className="link">
            <img src="write.svg" alt="Write" className="bigIcon" />
            </Link>
            <Link to="/calendar" className="link">
            <img src="calendar.svg" alt="Calendar" className="icon" />
            </Link>
        </div>
    </footer>
    )
}
