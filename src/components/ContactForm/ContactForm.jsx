import { useState } from "react";
import css from "./ContactForm.module.css"
import { nanoid } from "nanoid";


 
const ContactForm = ({ setContacts }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    


    const handleSubmit = (event) => {
        event.preventDefault();
        const newContact = {
            id: nanoid(),
            name,
            number
        };
        setContacts(prevContacts => [
            ...prevContacts, newContact
             
        ]);
        
        setName('');
        setNumber('');
        console.log("submit");
        console.log(newContact);
        
    };

    
    

    return (
        <div>
            <form className={css.form} onSubmit={handleSubmit}>
                <label className={css.label}>
                        <span>Name</span>
                        <input className={css.inputForm}
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder=""
                        required
                        />
                </label>
                <label className={css.label}>
                        <span>Number</span>
                        <input className={css.inputForm}
                        type="tel"
                        value={number}
                        onChange={(event) => setNumber(event.target.value)}
                        placeholder=""
                        required
                        />
                </label>
                <button className={css.ContactFormBtn} type="submit">Add Contact</button>
            </form>
        </div>
    );

}

 
 export default ContactForm;