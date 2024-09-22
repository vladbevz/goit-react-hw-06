import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import css from "./ContactForm.module.css"
import { Formik,  Field, Form,  ErrorMessage  } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid'

export default function ContactForm(){
    const dispatch = useDispatch();



    const handleSubmit = (values, { resetForm }) => {
        const newContact = {
          id: nanoid(),
          name: values.username,
          number: values.usernumber,
        };
       dispatch(addContact(newContact));
        resetForm();
      };
    const feedbackSchema = Yup.object().shape({
        username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        usernumber: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
      });
    return (
        <>
        <Formik 
            initialValues={{ username: "", usernumber: "" }} 
            onSubmit={handleSubmit}
            validationSchema={feedbackSchema}>
            
            <Form className={css.container}>
                <label htmlFor="username">Name</label>
                <Field type="text" name="username" />
                <ErrorMessage className={css.error} name="username" component="span" />

                <label htmlFor="usernumber">Number</label>
                <Field type="text" name="usernumber" />
                <ErrorMessage className={css.error} name="usernumber" component="span" />
                <button className={css.btn} type='submit' >Add contact</button>
            </Form>

        </Formik>
        </>
        
    )
}