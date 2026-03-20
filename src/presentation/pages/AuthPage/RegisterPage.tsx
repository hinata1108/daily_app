import { Register } from '../../components/Auth/Register.tsx'
import './AuthPage.css'

export const RegisterPage = () => {
  return (
    <div className="AuthPage">
      <div className="Authcontainer">
        <h1>ひとこと日記</h1>
        <p>あなたの今日を記録しよう</p>
        <Register />
      </div>
    </div>
  )
}
