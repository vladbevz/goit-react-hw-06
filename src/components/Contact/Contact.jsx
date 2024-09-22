
import css from "./Contact.module.css"
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact ({contact}){
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(contact.id));
    };
    return (
        <>
        <div className={css.container}>
            <div className={css.contact_data} >
                <div>{contact.name}</div>
                <div>{contact.number}</div>
            </div>
            <button className={css.deleteBtn} onClick={handleDelete}>Delete</button>
        </div>
        

</>
    )
    }