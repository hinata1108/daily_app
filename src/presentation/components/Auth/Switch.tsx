import { Link } from 'react-router-dom'

export const Switch = ({ type }: { type: 'login' | 'register' }) => {
  return (
    <div className="Switch">
      <Link to="/login" className={type === 'login' ? 'active' : 'not-active'}>
        ログイン
      </Link>
      <Link
        to="/register"
        className={type === 'register' ? 'active' : 'not-active'}
      >
        新規登録
      </Link>
    </div>
  )
}
