import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filters.name);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  );

  return (
    <>
      <ul className={css.contactList}>
        {visibleContacts.map((item) => (
          <li key={item.id}>
            <Contact item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
