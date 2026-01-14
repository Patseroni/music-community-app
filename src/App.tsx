
import HomePage from './client/pages/HomePage'
import { Routes, Route } from "react-router-dom";
import ProfilePage from './client/pages/ProfilePage'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </>

    )
}

export default App