import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoutes = () => {
    const { loading } = useAuth()

    if (loading) {
        return <p>Carregando...</p>
    }


    return <Outlet/>
}