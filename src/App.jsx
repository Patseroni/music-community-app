import HomePage from './client/pages/HomePage'
import { Routes, Route } from "react-router-dom"
import ProfilePage from './client/pages/ProfilePage'
import RegisterPage from './client/pages/RegisterPage'
import AboutPage from './client/pages/AboutPage'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </>

    )
}

export default App