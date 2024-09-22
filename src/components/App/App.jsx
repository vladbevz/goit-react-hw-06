import { useState, useEffect } from 'react'
import css from "./App.module.css"
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import initialContacts from "../../../contacts.json"

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });
  const [filter, setFilter] = useState("")

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()))

  const addContact = newContact => {
    setContacts(prevContacts =>[...prevContacts, newContact])
  } 
  const removeContact = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter}/>
      <ContactList contacts={visibleContacts} onDelete={removeContact}/>
    </div>
  )
  
}