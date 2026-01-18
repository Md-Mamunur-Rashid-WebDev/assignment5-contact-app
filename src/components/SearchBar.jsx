import { useContacts } from "../context/ContactContext";

const SearchBar = () => {
  const { setSearch } = useContacts();

  return (
    <input
      placeholder="Search..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
