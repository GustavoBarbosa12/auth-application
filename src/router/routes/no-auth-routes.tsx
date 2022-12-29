import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../../pages/login/login-page"
import { SignupPage } from "../../pages/signup/signup-page"

export const NoAuthRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
        </Routes>
    )
}