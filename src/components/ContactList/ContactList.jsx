import { useSelector, useDispatch } from "react-redux";
import { selectContacts, deleteContact } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"

export default function ContactList(){
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);
    const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
    
    return (
        <ul className={css.contacts_list}>{
            visibleContacts.map( contact =>
                (<li key={contact.id}>
                    <Contact  contact={contact} onDelete={()=> dispatch(deleteContact(contact.id))}/>
                </li>
                )

            )
        }
        </ul>
    )
}