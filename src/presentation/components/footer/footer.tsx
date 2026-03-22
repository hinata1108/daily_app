import {Link} from 'react-router-dom'
import './footer.css'
import home from '../../../assets/home.svg'
import write from '../../../assets/write.svg'
import calendar from '../../../assets/calendar.svg'
export const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer-content">
            <Link to="/home" className="link">
            <img src={home} alt="Home" className="icon" />
            
            </Link>
            <Link to="/write" className="link">
            <img src={write} alt="Write" className="bigIcon" />
            </Link>
            <Link to="/calendar" className="link">
            <img src={calendar} alt="Calendar" className="icon" />
            </Link>
        </div>
    </footer>
    )
}
