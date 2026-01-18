const ContactDetails = () => {
  return (
    <main className="py-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header card-title">
                <strong>Contact Details</strong>
              </div>

              <div className="card-body">
                <div className="form-group row">
                  <label className="col-md-3 col-form-label">
                    First Name
                  </label>
                  <div className="col-md-9">
                    <p className="form-control-plaintext text-muted">
                      Alfred
                    </p>
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-md-3 col-form-label">
                    Last Name
                  </label>
                  <div className="col-md-9">
                    <p className="form-control-plaintext text-muted">
                      Kuhlman
                    </p>
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-md-3 col-form-label">
                    Email
                  </label>
                  <div className="col-md-9">
                    <p className="form-control-plaintext text-muted">
                      alfred@test.com
                    </p>
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-md-3 col-form-label">
                    Phone
                  </label>
                  <div className="col-md-9">
                    <p className="form-control-plaintext text-muted">
                      +6286767565656
                    </p>
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-md-3 col-form-label">
                    Address
                  </label>
                  <div className="col-md-9">
                    <p className="form-control-plaintext text-muted">
                      Lorem ipsum dolor
                    </p>
                  </div>
                </div>

                <hr />

                <div className="form-group row mb-0">
                  <div className="col-md-9 offset-md-3">
                    <button className="btn btn-info me-2">
                      Edit
                    </button>
                    <button className="btn btn-outline-danger me-2">
                      Delete
                    </button>
                    <button className="btn btn-outline-secondary">
                      Cancel
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactDetails;
