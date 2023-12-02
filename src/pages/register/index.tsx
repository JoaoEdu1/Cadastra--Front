import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRegister } from '../../hooks/useRegister';
import { registerData, schemaRegister } from "./validators";
import { StyleDiv, StyledInput, StyledRegisterForm } from "./style";
import { ButtonForm, StyledMain } from "../../styles/globalStyle";
import { Header } from "../../components/hearder";

export const Register = () => {
    const { registerIn } = useRegister()

    const { register, handleSubmit } = useForm<registerData>({
        resolver: zodResolver(schemaRegister)
    })

    const submit = (data: registerData) => {
        console.log(data);
        registerIn(data)
    }

    return (
        <StyledMain>
            <Header/>
            <StyleDiv>
            <h1>Fazer o cadastro</h1>

            <StyledRegisterForm onSubmit={handleSubmit(submit)}>
                    <StyledInput type="name" id="name" placeholder="Nome" {...register("name")} />

                    <StyledInput type="email" id="email" placeholder="E-mail" {...register("email")} />

                    <StyledInput type="phone" id="phone" placeholder="Telefone" {...register("phone")} />
                
                    <StyledInput type="password" id="password" placeholder="Senha" {...register("password")} />

                    <ButtonForm type="submit">Cadastrar-se</ButtonForm>

            </StyledRegisterForm>
            </StyleDiv>
        </StyledMain>
    )
}