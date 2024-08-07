import css from './App.module.css'
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'
import SearchBox from '../SearchBox/SearchBox'
import { useState, useEffect } from 'react';


const App = () => {
    const defaultContacts = [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
    const [contacts, setContacts] = useState(() => {
        try {
            const storedContacts = localStorage.getItem('contacts');
            return storedContacts ? JSON.parse(storedContacts) : defaultContacts;
        } catch (error) {
            console.error("Error parsing contacts from localStorage:", error);
            return defaultContacts;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('contacts', JSON.stringify(contacts));
        } catch (error) {
            console.error("Error saving contacts to localStorage:", error);
        }
    }, [contacts]);
    

    const deleteContact = (id) => {
        setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
    };

    const addContact = (contact) => {
        setContacts(prevContacts => [...prevContacts, contact]);
    };

    const [filterValue, setFilterValue] = useState("");
    const handleContactSearch = (event) => {
        setFilterValue(event.target.value);
    };

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );

    return (
        <div>
           <h1 className={css.title}>Phonebook</h1>
            <ContactForm addContact={addContact}/>
           <SearchBox filterValue={filterValue} handleContactSearch={handleContactSearch}/>
           <ContactList contacts={filteredContacts}  deleteContact={deleteContact} />
        </div>
    )
  
}

export default App;
