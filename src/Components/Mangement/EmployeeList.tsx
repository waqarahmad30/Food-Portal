import React, { useState } from "react";
import "./managementPage.css";
import jsPDF from "jspdf"; // Import jsPDF for PDF generation

const EmployeeList = ({
  employees,
  onSubscriptionToggle,
  onSendOtp,
  onSendOtpToAll,
}: {
  employees: any[];
  onSubscriptionToggle: (id: number) => void;
  onSendOtp: (id: number) => void;
  onSendOtpToAll: (shift: string) => void;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [shiftFilter, setShiftFilter] = useState<"day" | "night" | "casual" |null>(null);
  // Filter employees based on search term (name or ID)
  let filteredEmployees = employees.filter(
    (employee) =>
      (employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.id.toString().includes(searchTerm) 
      )
      
  );
  if (filteredEmployees.some(
    (employee) => employee.subscribed === true)) {
      filteredEmployees = employees.filter(
        (employee) =>
          (employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          employee.id.toString().includes(searchTerm)) && employee.shift === shiftFilter
          )

  }
  const hasDayShiftEmployees = filteredEmployees.some(
    (employee) => employee.shift === "day" && employee.subscribed === true
  );
  const hasNightShiftEmployees = filteredEmployees.some(
    (employee) => employee.shift === "night" && employee.subscribed === true
  );
  // Function to download PDF of the filtered employee list
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Employee List", 10, 10);
    let yPos = 20;
    filteredEmployees.forEach((employee) => {
      doc.text(
        `ID: ${employee.id}, Name: ${employee.name}, Email: ${employee.email}`,
        10,
        yPos
      );
      yPos += 10;
    });
    doc.save("employee-list.pdf");
  };

  return (
    <div className="tableShow">
      <h2 className="p-4">Employee List</h2>
      {/* Search and Download Section */}
      <div className="d-flex justify-content-between p-3">
        <input
          type="text"
          placeholder="Search by Name or ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control w-50"
        />
        { employees.some(
          (employee) => employee.subscribed === true) &&
        <select
        value={shiftFilter ?? ""} // Ensure a default value if shiftFilter is null
        onChange={(e) => setShiftFilter(e.target.value as "day" | "night" | "casual" |null)}
        className="form-select"
          style={{ width: "120px" }}
        >
          <option value="day">Day Shift</option>
          <option value="night">Night Shift</option>
          <option value="casual">Casual Shift</option>
        </select>
}
        {/* Button to send OTP to all subscribed employees, only visible if relevant employees are present */}

        {hasDayShiftEmployees && (
          <button
            className="btn btn-1 m-1"
            onClick={() => onSendOtpToAll("day")}
          >
            Send OTP
          </button>
        )}
        {hasNightShiftEmployees && (
          <button
            className="btn btn-1 m-1"
            onClick={() => onSendOtpToAll("night")}
          >
            Send OTP
          </button>
        )}

        <button className="btn btn-primary" onClick={downloadPDF}>
          Download PDF
        </button>
      </div>

      {/* Employee List Table */}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.email}</td>
              <td style={{ display: "flex", justifyContent: "space-between" }}>
                <button
                  className={`btn m-1 fixed-button ${
                    employee.subscribed ? "btn-danger" : "btn-success"
                  }`}
                  style={{ width: "120px" }}
                  onClick={() => onSubscriptionToggle(employee.id)}
                >
                  {employee.subscribed ? "Unsubscribe" : "Subscribe"}
                </button>
                {employee.subscribed && (
                <button
                  className="btn btn-info m-1 fixed-button"
                  onClick={() => onSendOtp(employee.id)}
                >
                  Send OTP
                </button>)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
