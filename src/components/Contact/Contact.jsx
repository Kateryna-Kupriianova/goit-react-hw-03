import { BsPersonFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import css from './Contact.module.css'
const Contact = ({contact, deleteContact}) => {
  return (
      <li className={css.contactItem}>
          <div>
              <span className={css.dataText}><BsPersonFill /> {contact.name}</span><br />
              <span className={css.dataText}><FaPhone /> {contact.number}</span>
          </div>
          
          <button type="button" className={css.contactBtnDel}  onClick={() => deleteContact(contact.id)}>Delete</button>
    </li>
  )
}

export default Contact