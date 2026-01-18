import { useContacts } from "../context/ContactContext";

const FilterBar = () => {
  const { contacts, setContacts } = useContacts();

  const sortBy = (key) => {
    const sorted = [...contacts].sort((a, b) => {
      if (key === "date") {
        return new Date(a.createdAt) - new Date(b.createdAt);
      }
      return a[key].localeCompare(b[key]);
    });

    setContacts(sorted);
  };

  return (
    <div className="d-flex gap-2">
      <button
        className="btn btn-outline-success"
        onClick={() => sortBy("firstName")}
      >
        First Name A-Z
      </button>

      <button
        className="btn btn-outline-success"
        onClick={() => sortBy("lastName")}
      >
        Last Name A-Z
      </button>

      <button
        className="btn btn-outline-success"
        onClick={() => sortBy("date")}
      >
        Oldest First
      </button>
    </div>
  );
};

export default FilterBar;
