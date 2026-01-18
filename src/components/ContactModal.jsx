import { useContacts } from "../context/ContactContext";
import { useState } from "react";

const ContactModal = ({ contact, onClose }) => {
  const { removeContact, updateExistingContact } = useContacts();
  const [isEdit, setIsEdit] = useState(false);

  const [formData, setFormData] = useState({ ...contact });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = () => {
    updateExistingContact(contact.id, formData);
    setIsEdit(false);
  };

  return (
    <div
      className="modal fade show d-block"
      style={{ background: "#00000080" }}
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title">
              {isEdit ? "Edit Contact" : "Contact Details"}
            </h5>
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "none",
                fontSize: "24px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>

          {/* Body */}
          <div className="modal-body">
            {/* First Name */}
            <div className="form-group row">
              <label className="col-md-3 col-form-label">First Name</label>
              <div className="col-md-9">
                {isEdit ? (
                  <input
                    name="firstName"
                    className="form-control"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                ) : (
                  <p className="form-control-plaintext text-muted">
                    {contact.firstName}
                  </p>
                )}
              </div>
            </div>

            {/* Last Name */}
            <div className="form-group row">
              <label className="col-md-3 col-form-label">Last Name</label>
              <div className="col-md-9">
                {isEdit ? (
                  <input
                    name="lastName"
                    className="form-control"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                ) : (
                  <p className="form-control-plaintext text-muted">
                    {contact.lastName}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="form-group row">
              <label className="col-md-3 col-form-label">Email</label>
              <div className="col-md-9">
                {isEdit ? (
                  <input
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                  />
                ) : (
                  <p className="form-control-plaintext text-muted">
                    {contact.email}
                  </p>
                )}
              </div>
            </div>

            {/* Phone */}
            <div className="form-group row">
              <label className="col-md-3 col-form-label">Phone</label>
              <div className="col-md-9">
                {isEdit ? (
                  <input
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                ) : (
                  <p className="form-control-plaintext text-muted">
                    {contact.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Address */}
            <div className="form-group row">
              <label className="col-md-3 col-form-label">Address</label>
              <div className="col-md-9">
                {isEdit ? (
                  <textarea
                    name="address"
                    className="form-control"
                    value={formData.address}
                    onChange={handleChange}
                  />
                ) : (
                  <p className="form-control-plaintext text-muted">
                    {contact.address || "N/A"}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            {isEdit ? (
              <button className="btn btn-primary" onClick={handleUpdate}>
                Save
              </button>
            ) : (
              <button className="btn btn-info" onClick={() => setIsEdit(true)}>
                Edit
              </button>
            )}

            <button
              className="btn btn-outline-danger"
              onClick={() => {
                if (window.confirm("Are you sure?")) {
                  removeContact(contact.id);
                  onClose();
                }
              }}
            >
              Delete
            </button>

            <button className="btn btn-outline-secondary" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
