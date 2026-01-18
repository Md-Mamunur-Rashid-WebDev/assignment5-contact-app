import { createContext, useContext, useEffect, useState } from "react";
import * as api from "../services/api";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [originalContacts, setOriginalContacts] = useState([]);


  useEffect(() => {
    api.getContacts().then((res) => {
      setContacts(res.data);
      setOriginalContacts(res.data);
    });
  }, []);

  
  const addNewContact = async (data) => {
    const res = await api.addContact(data);
    setContacts([...contacts, res.data]);
  };

  const updateExistingContact = async (id, data) => {
    await api.updateContact(id, data);
    const updated = contacts.map((c) => (c.id === id ? data : c));
    setContacts(updated);
  };

  const removeContact = async (id) => {
    await api.deleteContact(id);
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        setContacts,
        originalContacts, // NEW
        search,
        setSearch,
        addNewContact,
        updateExistingContact,
        removeContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContacts = () => useContext(ContactContext);
