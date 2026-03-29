import { DailyList } from '../../components/DailyList/DailyList.tsx'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../../application/auth-Service.tsx'
import '../Page.css'

export const HomePage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const user = await loginUser()
        if (!user) {
          navigate('/login')
        }
      } catch (error) {
        console.error(error)
        navigate('/login')
      }
    }
    checkLogin()
  }, [navigate])

  return (
    <div className="page">
      <h1>まいにちの記録</h1>
      <DailyList />
    </div>
  )
}
