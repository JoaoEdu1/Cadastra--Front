import {  Dispatch, ReactNode, SetStateAction, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { ModalDiv } from "./style"
import { StyledInput } from "../../pages/register/style"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactData, schemaContact } from "./validators"
import { useForm } from "react-hook-form"
import { api } from "../../services/api"
import { Contact } from "../../pages/dashboard"
import { ButtonForm } from "../../styles/globalStyle"

interface ModalProps {
    toggleModal: () => void
    blockClosing?: boolean
    children: ReactNode
    setContact: Dispatch<SetStateAction<Contact[]>>

}

export const Modal = ({ toggleModal, setContact, blockClosing }: ModalProps) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (!ref.current) {
                return
            }

            if (!event.target) {
                return
            }

            if (!ref.current.contains(event.target as HTMLElement)) {
                toggleModal()
            }
        }

        window.addEventListener("mousedown", handleClick)

        return () => {
            window.removeEventListener("mousedown", handleClick)
        }
    }, [toggleModal])

    const { register, handleSubmit } = useForm<contactData>({
        resolver: zodResolver(schemaContact)
    })

    const createContact = async (data:contactData) => {
        const response = await api.post("/contact", { ...data})

        setContact(previousContact => [response.data, ...previousContact])
        toggleModal()
    }

    return createPortal(
        <ModalDiv>
            <div ref={blockClosing ? null : ref}>
                <div>
                    <h3>Criar um contato</h3>

                    <button onClick={toggleModal}>X</button>
                </div>

                <form onSubmit={handleSubmit(createContact)}>
                    <StyledInput type="name" id="name" placeholder="Nome" {...register("name")} />

                    <StyledInput type="email" id="email" placeholder="E-mail" {...register("email")} />

                    <StyledInput type="phone" id="phone" placeholder="Telefone" {...register("phone")} />

                    <ButtonForm type="submit"> Criar Contato </ButtonForm>
                </form>

            </div>
        </ModalDiv>,
        document.body
    )
}