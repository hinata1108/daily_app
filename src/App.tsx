import { LoginPage } from './presentation/pages/AuthPage/LoginPage.tsx'
import { RegisterPage } from './presentation/pages/AuthPage/RegisterPage.tsx'
import { HomePage } from './presentation/pages/HomePage/HomePage.tsx'
import { WritePage } from './presentation/pages/WritePage/WritePage.tsx'
import './index.css'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App
