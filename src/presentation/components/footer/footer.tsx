import {Link} from 'react-router-dom'
import './footer.css'
export const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer-content">
            <Link to="/home" className="link">
            <img src={`${import.meta.env.BASE_URL}home.svg`} alt="Home" className="icon" />
            
            </Link>
            <Link to="/write" className="link">
            <img src={`${import.meta.env.BASE_URL}write.svg`} alt="Write" className="bigIcon" />
            </Link>
            <Link to="/calendar" className="link">
            <img src={`${import.meta.env.BASE_URL}calendar.svg`} alt="Calendar" className="icon" />
            </Link>
        </div>
    </footer>
    )
}
