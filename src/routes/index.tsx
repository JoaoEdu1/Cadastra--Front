import { Routes, Route } from "react-router-dom"
import { Dashboard } from "../pages/dashboard"
import { Login } from "../pages/login"
import { Register } from "../pages/register"
import { ProtectedRoutes } from "./protectedRoutes"

export const MainRoutes = () => {
    return (
        <Routes>
            <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Dashboard/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    )
}