import { useSelector } from 'react-redux';
import css from "./App.module.css";
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

export default function App() {
  const contacts = useSelector(selectContacts); 
  const filter = useSelector(selectNameFilter); 
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm /> 
      <SearchBox /> 
      <ContactList contacts={visibleContacts} />
    </div>
  );
}