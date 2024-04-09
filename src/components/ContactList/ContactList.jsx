import { useSelector, useDispatch } from "react-redux";
import Contact from "../Contact/Contact";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          {...contact}
          onDelete={() => handleDelete(contact.id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
