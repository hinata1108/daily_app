import { Daily_Form } from '../../components/Daily_Form/Daily_Form.tsx'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../../application/authService.tsx'

export const WritePage = () => {
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
    <div>
      <h1>Write</h1>
      <Daily_Form />
    </div>
  )
}
