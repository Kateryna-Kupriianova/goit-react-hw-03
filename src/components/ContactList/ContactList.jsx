
import Contact from "../Contact/Contact" 
import css from "./ContactList.module.css"

const ContactList = ({ contacts, deleteContact }) => {
    
  return (
      <div>
          <ul className={css.contactList}>
          {contacts.map (contact => (
              <Contact key={contact.id} contact={contact} deleteContact={deleteContact} /> 
        ))}
      </ul>
      </div>
  )
}

export default ContactList;