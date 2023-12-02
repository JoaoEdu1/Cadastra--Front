import { useNavigate } from "react-router-dom"
import { StyledHeader } from "./style"
import { ButtonForm } from "../../styles/globalStyle"

export const Header = () => {
    const navigate = useNavigate()

    return (
        <StyledHeader>
            <h1 onClick={() => { navigate("/")}}>Tech Contatos</h1>
            <div>
                <ButtonForm onClick={() => { navigate("/login")}}>Entrar</ButtonForm>
                <ButtonForm onClick={() => { navigate("/register")}}>Cadastrar</ButtonForm >
            </div>
        </StyledHeader>
    )
}