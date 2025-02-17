import React, { useState } from 'react';

const CreateLocation = () => {
  const [locationData, setLocationData] = useState({
    name: '',
    lc_id: '',
    addressLine1: '',
    addressLine2: '',
    area: '',
    city: '',
    state: '',
    pinCode: '',
    annualRevenue: '',
    ph_no: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocationData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <body class =" text-white">
    <main class="mt-5 pt-3">
      <div class="container">
        <div class="container-fluid px-4">
          <div class="row g-3 my-2">
            <div class="rounded">
              <div class="h1 my-4 text-center border">Add Student Form</div>
              <form id="studentForm">
                <div class="border p-3">
                  <div class="row">
                    <div class="col-md-6 mt-md-3 mt-3">
                      <label>First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        class="form-control"
                        required
                      />
                    </div>
                    <div class="col-md-6 mt-md-3 mt-3">
                      <label>Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        class="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mt-md-3 mt-3">
                      <label>Birthday</label>
                      <input
                        type="date"
                        id="dob"
                        class="form-control"
                        required
                      />
                    </div>
                    <div class="col-md-6 mt-md-3 mt-3">
                      <label>Gender</label>
                      <div class="d-flex align-items-center mt-2">
                        <label class="option">
                          <input type="radio" name="gender" value="male" />
                          Male <span class="checkmark"></span>
                        </label>
                        <label class="option ms-4">
                          <input type="radio" name="gender" value="female" />
                          Female <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mt-md-3 mt-3">
                      <label>Email</label>
                      <input
                        type="email"
                        id="email"
                        class="form-control"
                        required
                      />
                    </div>
                    <div class="col-md-6 mt-md-3 mt-3">
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        id="contactNo"
                        class="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div class="my-md-3 my-3">
                    <label>Branch</label>
                    <select id="sub" required>
                      <option value="" selected hidden>Choose Option</option>
                      <option value="Maths">IT</option>
                      <option value="Science">CSE</option>
                      <option value="Social">Mechanical</option>
                      <option value="Hindi">Civil</option>
                    </select>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mt-md-3 mt-3">
                      <label>Roll No</label>
                      <input
                        type="text"
                        id="rollno"
                        class="form-control"
                        required
                      />
                    </div>
                    <div class="col-md-6 mt-md-3 mt-3">
                      <label>Registration Date</label>
                      <input
                        type="date"
                        id="registrationDate"
                        class="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mt-md-3 mt-3">
                      <label>Parent Name</label>
                      <input
                        type="text"
                        id="parentName"
                        class="form-control"
                        required
                      />
                    </div>
                    <div class="col-md-6 mt-md-3 mt-3">
                      <label>Parent Mobile No</label>
                      <input
                        type="tel"
                        id="parentMobileNo"
                        class="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div class="d-grid mt-4">
                    <button
                      class="btn btn-primary btn-lg"
                      id="btnAddStudent"
                      type="button"
                    >
                      Add Student
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
    <script src="./js/bootstrap.bundle.min.js"></script>
    <script src="./js/jquery-3.5.1.js"></script>
    <script src="./js/myscript.js"></script>
  </body>
  );
};

export default CreateLocation;
