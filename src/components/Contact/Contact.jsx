import css from "./Contact.module.css"
export default function Contact ({contact, onDelete}){
    const handleDelete = () => {
        onDelete(contact.id);
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