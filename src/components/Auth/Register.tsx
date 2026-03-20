import { useState } from 'react'
import './Auth.css'
import { Switch } from './Switch.tsx'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate('/login')
  }

  return (
    <form onSubmit={handleRegister}>
      <div className="Auth">
        <Switch type="register" />
        <div className="AuthForm">
          <label>メールアドレス</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="AuthForm">
          <label>パスワード</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">登録する</button>
      </div>
    </form>
  )
}
