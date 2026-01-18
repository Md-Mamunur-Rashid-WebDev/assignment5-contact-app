import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContacts } from "../context/ContactContext";

const AddContact = () => {
  const navigate = useNavigate();
  const { addNewContact } = useContacts();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addNewContact({
      ...formData,
      createdAt: new Date(),
    });

    navigate("/");
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
          <div className="row justify-content-md-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header card-title">
                  <strong>Add New Contact</strong>
                </div>

                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    {/* First Name */}
                    <div className="form-group row">
                      <label
                        htmlFor="firstName"
                        className="col-md-3 col-form-label"
                      >
                        First Name
                      </label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          name="firstName"
                          className="form-control"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Last Name */}
                    <div className="form-group row">
                      <label
                        htmlFor="lastName"
                        className="col-md-3 col-form-label"
                      >
                        Last Name
                      </label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          name="lastName"
                          className="form-control"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="form-group row">
                      <label
                        htmlFor="email"
                        className="col-md-3 col-form-label"
                      >
                        Email
                      </label>
                      <div className="col-md-9">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="form-group row">
                      <label
                        htmlFor="phone"
                        className="col-md-3 col-form-label"
                      >
                        Phone
                      </label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Address */}
                    <div className="form-group row">
                      <label
                        htmlFor="address"
                        className="col-md-3 col-form-label"
                      >
                        Address
                      </label>
                      <div className="col-md-9">
                        <textarea
                          name="address"
                          rows="3"
                          className="form-control"
                          value={formData.address}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <hr />

                    {/* Buttons */}
                    <div className="form-group row mb-0">
                      <div className="col-md-9 offset-md-3">
                        <button type="submit" className="btn btn-primary me-2">
                          Save
                        </button>
                        <Link to="/" className="btn btn-outline-secondary">
                          Cancel
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AddContact;
