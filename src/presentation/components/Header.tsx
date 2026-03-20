import '../App.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <h1>今日はどんな日？</h1>
      <nav className="HeaderNav">
        <Link to="/home">ホーム</Link>
        <Link to="/write">書く</Link>
        <Link to="/login">ログイン</Link>
      </nav>
    </header>
  )
}
