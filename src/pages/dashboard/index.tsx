import { useEffect, useState } from "react"
import { ButtonForm } from "../../styles/globalStyle"
import { Header } from "../../components/hearder"
import { api } from "../../services/api"
import { Card } from "../../components/card";
import { Modal } from "../../components/modal";
import { StyledDivv, StyledMainDashboard } from "./style";

export interface Contact {
    id: string;
    name: string;
    email: string;
    phone: string;
    createdAt: string;
}

export const Dashboard = () => {
    const [contact, setContact] = useState<Contact[]>([])
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        (
            async () => {
                const response = await api.get<Contact[]>("/contact")

                setContact(response.data)
            }
        )()

    }, [])

    const toggleModal = () => setIsOpen(!isOpen)

    const renderContact = (contactsToRender: Contact[]) =>
    contactsToRender.map(contact => <Card key={contact.id} contact={contact} />)

    return (
        <StyledDivv>
            <Header/>
            <StyledMainDashboard>
                
                <div className="Modal">
                    <ButtonForm onClick={toggleModal}>+ Contatos</ButtonForm>

                    {
                        isOpen && <Modal toggleModal={toggleModal} setContact={setContact}> </Modal>
                    }
                </div>

                <div className="contacts">
                {renderContact(contact)}

                </div>
                
            </StyledMainDashboard>
        </StyledDivv>
    )
}