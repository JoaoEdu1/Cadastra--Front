import { ReactNode, createContext } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { registerData } from "../pages/register/validators";


interface RegisterProviderProps {
    children: ReactNode
}

interface RegisterContextValues {
    registerIn: (data: registerData) => void
}


export const RegisterContext = createContext<RegisterContextValues>({} as RegisterContextValues)

export const RegisterProvider = ({ children }: RegisterProviderProps) => {

    const navigate = useNavigate()

    const registerIn = async (data: registerData) => {
        try {
            await api.post("/users", data)

            navigate("/login")
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <RegisterContext.Provider value={{ registerIn }}>
            {children}
        </RegisterContext.Provider>
    )
}