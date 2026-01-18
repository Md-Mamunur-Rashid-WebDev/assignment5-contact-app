import { Link } from "react-router-dom";
import { useContacts } from "../context/ContactContext";
import ContactRow from "../components/ContactRow";

const Home = () => {
  const { contacts, setContacts, originalContacts, search, setSearch } =
    useContacts();

  const handleFilter = (value) => {
    if (value === "default") {
      setContacts(originalContacts);
      return;
    }

    let sorted = [...contacts];

    if (value === "firstName") {
      sorted.sort((a, b) => a.firstName.localeCompare(b.firstName));
    } else if (value === "lastName") {
      sorted.sort((a, b) => a.lastName.localeCompare(b.lastName));
    } else if (value === "date") {
      sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    setContacts(sorted);
  };


  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand text-uppercase" to="/">
            <strong>Contact</strong> App
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="py-5">
        <div className="container">
          <div className="card">
            {/* Header */}
            <div className="card-header card-title">
              <div className="d-flex align-items-center justify-content-between">
                <h2>All Contacts</h2>

                {/* Search */}
                <div className="input-group w-50">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="search contact"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button className="btn btn-success">Search</button>
                </div>

                {/* Add New */}
                <Link to="/add" className="btn btn-success">
                  <i className="fa fa-plus-circle"></i> Add New
                </Link>
              </div>
            </div>

            {/* Filter */}
            <div className="d-flex align-items-center justify-content-between p-3">
              <div className="fs-2">
                <i className="fa fa-filter text-success"></i> Filter
              </div>

              <select
                className="form-select w-25"
                onChange={(e) => handleFilter(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="firstName">First Name (A → Z)</option>
                <option value="lastName">Last Name (A → Z)</option>
                <option value="date">Oldest To First</option>
              </select>
            </div>

            {/* Table */}
            <div className="card-body">
              {contacts.length === 0 ? (
                <p className="text-center">No Contact Information</p>
              ) : (
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts
                      .filter((c) =>
                        `${c.firstName} ${c.lastName} ${c.email} ${c.phone}`
                          .toLowerCase()
                          .includes(search.toLowerCase())
                      )
                      .map((contact, index) => (
                        <ContactRow
                          key={contact.id}
                          index={index}
                          contact={contact}
                        />
                      ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
