import { useState } from "react";
import ContactModal from "./ContactModal";
import { useContacts } from "../context/ContactContext";

const ContactRow = ({ contact, index }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{contact.firstName}</td>
        <td>{contact.lastName}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
        <td>
          <button
            className="btn btn-sm btn-circle btn-outline-info me-1"
            onClick={() => setShow(true)}
          >
            <i className="fa fa-eye"></i>
          </button>
        </td>
      </tr>

      {show && (
        <ContactModal
          contact={contact}
          onClose={() => setShow(false)}
        />
      )}
    </>
  );
};

export default ContactRow;
