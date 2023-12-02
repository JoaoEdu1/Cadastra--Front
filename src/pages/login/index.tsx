import { useForm } from "react-hook-form"
import { LoginData, schema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from "react-router-dom";
import { DivRegister, RegisterButton, StyledloginForm } from "./style";
import { ButtonForm, StyledMain } from "../../styles/globalStyle";
import { Header } from "../../components/hearder";
import { StyledInput } from "../register/style";

export const Login = () => {
    const { signIn } = useAuth()
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm<LoginData>({
        resolver: zodResolver(schema)
    })

    const submit = (data: LoginData) => {
        signIn(data)
    }

    return (
        <StyledMain>
            <Header/>
            <DivRegister>
            <h1>Fazer login</h1>
            <StyledloginForm onSubmit={handleSubmit(submit)}>
                    <StyledInput type="email" id="email" placeholder="E-mail" {...register("email")} />
                
                    <StyledInput type="password" id="password" placeholder="Senha" {...register("password")} />

                    <ButtonForm type="submit">Fazer Login</ButtonForm>

            </StyledloginForm>
            <RegisterButton onClick={() => navigate('/register')}>Não é usuário? Cadastre-se</RegisterButton>
            </DivRegister>
        </StyledMain>
    )
}