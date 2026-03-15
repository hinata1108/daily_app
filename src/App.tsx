import {LoginPage} from './pages/AuthPage/LoginPage.tsx'
import {RegisterPage} from './pages/AuthPage/RegisterPage.tsx'
import {HomePage} from './pages/HomePage/HomePage.tsx'
import {WritePage} from './pages/WritePage/WritePage.tsx'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/write" element={<WritePage />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
