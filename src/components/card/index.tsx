import { Contact } from "../../pages/dashboard"

interface CardProps{
    contact: Contact
}

export const Card = ({contact}: CardProps) => {
    return(
        <div>
            <h3>{contact.name}</h3>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
        </div>
    )
}