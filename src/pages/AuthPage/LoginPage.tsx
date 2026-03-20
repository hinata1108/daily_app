import { Login } from '../../components/Auth/Login.tsx'
import './AuthPage.css'

export const LoginPage = () => {
  return (
    <div className="AuthPage">
      <div className="Authcontainer">
        <h1>ひとこと日記</h1>
        <p>あなたの今日を記録しよう</p>
        <Login />
      </div>
    </div>
  )
}
