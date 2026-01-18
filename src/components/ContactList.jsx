import { useContacts } from "../context/ContactContext";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const { contacts, search } = useContacts();

  const filtered = contacts.filter((c) =>
    `${c.firstName} ${c.lastName} ${c.email} ${c.phone}`
      .toLowerCase()
      .includes(search.toLowerCase().trim())
  );

  if (filtered.length === 0) {
    return (
      <tr>
        <td colSpan="6" className="text-center text-danger py-4">
          No Contact Information
        </td>
      </tr>
    );
  }

  return (
    <>
      {filtered.map((contact, index) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          serial={index + 1}
        />
      ))}
    </>
  );
};

export default ContactList;
