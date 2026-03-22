import { LoginPage } from './presentation/pages/AuthPage/LoginPage.tsx'
import { RegisterPage } from './presentation/pages/AuthPage/RegisterPage.tsx'
import { HomePage } from './presentation/pages/HomePage/HomePage.tsx'
import { WritePage } from './presentation/pages/WritePage/WritePage.tsx'
import { Calendar } from './presentation/pages/CalenderPage/Calendar.tsx' 
import { Footer } from './presentation/components/footer/footer.tsx'
import './index.css'
import { Routes, Route, Navigate,useLocation, BrowserRouter } from 'react-router-dom'

function App() {
  const location = useLocation();

  const hideFooter =
  location.pathname === '/login' || location.pathname === '/register';
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/calendar" element={<Calendar />}/>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
        {!hideFooter && <Footer />}
    </>
  )
}

export default App

