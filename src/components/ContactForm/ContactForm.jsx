
import css from "./ContactForm.module.css"
import { nanoid } from "nanoid";
import { Formik, Form, Field } from 'formik';


 
const ContactForm = ({ setContacts }) => {
    
    const INITIAL_VALUES = {
        name: "",
        number: ""
    }


   

    const handleSubmit = (values, actions) => {
        const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number
        };
        setContacts(prevContacts => [
            ...prevContacts, newContact
             
        ]);
        actions.resetForm();
        console.log("submit");
		console.log(newContact);
		
	};
    

    return (
        <div>
            <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
                <Form className={css.form} >
                    <label className={css.label}>
                        <span>Name</span>
                        <Field className={css.inputForm}
                            type="text"
                            name="name"
                            placeholder=""
                            required
                        />
                    </label>
                    <label className={css.label}>
                        <span>Number</span>
                        <Field className={css.inputForm}
                            type="tel"
                            name="number"
                            placeholder=""
                            required
                        />
                    </label>
                     <button className={css.ContactFormBtn} type="submit">Add Contact</button>
                </Form>
            </Formik>
        </div>
    );

}

 
 export default ContactForm;