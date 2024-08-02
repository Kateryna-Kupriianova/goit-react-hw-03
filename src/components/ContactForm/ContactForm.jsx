import { useState } from "react";
 
const ContactForm = ({ setContacts }) => {
            const [name, setName] = useState('');
        const [number, setNumber] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            setContacts(prevContacts => [
                ...prevContacts,
                { id: `id-${prevContacts.length + 1}`, name, number }
            ]);
            setName('');
            setNumber('');
        };
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        required
                    />
                    <input
                        type="text"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder="Number"
                        required
                    />
                    <button type="submit">Add Contact</button>
                </form>
            </div>
        );
    }

 
 export default ContactForm;