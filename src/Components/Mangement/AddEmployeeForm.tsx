import React, { useState } from "react";

interface AddEmployeeFormProps {
  onAddEmployee: (newEmployee: {
    id: number;
    name: string;
    department: string;
    email: string;
    shift: string;
    subscribed: boolean;
    otp: string;
  }) => void;
}

const AddEmployeeForm: React.FC<AddEmployeeFormProps> = ({ onAddEmployee }) => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [shift, setShift] = useState("day");
  const [subscribed, setSubscribed] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newEmployee = {
      id: Date.now(), // Generate a unique ID
      name,
      department,
      email,
      shift,
      subscribed,
      otp,
    };

    onAddEmployee(newEmployee); // Call the function to add the employee
    clearForm(); // Clear the form fields after submission
  };

  const clearForm = () => {
    setName("");
    setDepartment("");
    setEmail("");
    setShift("day");
    setSubscribed(false);
    setOtp("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-employee-form p-4 row">
      <h2 className="mb-3 p-4">Add Employee</h2>
      <div className="mb-3 col-6">
        <label className="form-label">Name:</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3 col-6">
        <label className="form-label">Department:</label>
        <input
          type="text"
          className="form-control"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3 col-3">
        <label className="form-label">Shift:</label>
        <select
          className="form-select"
          value={shift}
          onChange={(e) => setShift(e.target.value)}
          required
        >
          <option value="day">Day</option>
          <option value="night">Night</option>
          <option value="casual">Casual</option>
        </select>
      </div>
      <div className="mb-3 form-check col-3 align-content-end">
        <input
          type="checkbox"
          className="form-check-input"
          checked={subscribed}
          onChange={(e) => setSubscribed(e.target.checked)}
        />
        <label className="form-check-label">Subscribed</label>
      </div>
      <div className="mb-3 col-3">
        <label className="form-label">OTP:</label>
        <input
          type="text"
          className="form-control"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Employee</button>
    </form>
  );
};

export default AddEmployeeForm;
