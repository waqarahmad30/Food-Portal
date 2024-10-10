import React, { useState } from "react";
import EmployeeList from "./EmployeeList";
import AddEmployeeForm from "./AddEmployeeForm";
import Dashboard from "./Dashboard";
import "./managementPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faUserTag,
  faUserPlus,
  faUserCheck,
  faCubesStacked,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ManagementPage = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  const [currentView, setCurrentView] = useState<"day" | "night" | "subscribed" | "food" | "add" | "dashboard" | "casual" | null>("dashboard");

  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", department: "Engineering", email: "john.doe@example.com", shift: "day", subscribed: false, otp: "1234" },
    { id: 2, name: "Jane Smith", department: "Finance", email: "jane.smith@example.com", shift: "night", subscribed: false, otp: "5678" },
    { id: 3, name: "Alice Johnson", department: "HR", email: "alice.johnson@example.com", shift: "casual", subscribed: false, otp: "9101" },
    { id: 4, name: "Michael Brown", department: "Marketing", email: "michael.brown@example.com", shift: "day", subscribed: true, otp: "1122" },
    { id: 5, name: "Emily Davis", department: "Engineering", email: "emily.davis@example.com", shift: "night", subscribed: true, otp: "3344" },
    { id: 6, name: "David Wilson", department: "Finance", email: "david.wilson@example.com", shift: "casual", subscribed: false, otp: "5566" },
    { id: 7, name: "Linda Martinez", department: "HR", email: "linda.martinez@example.com", shift: "day", subscribed: false, otp: "7788" },
    { id: 8, name: "Robert Garcia", department: "Marketing", email: "robert.garcia@example.com", shift: "night", subscribed: true, otp: "9900" },
    { id: 9, name: "Jessica Rodriguez", department: "Engineering", email: "jessica.rodriguez@example.com", shift: "casual", subscribed: true, otp: "1234" },
    { id: 10, name: "William Hernandez", department: "Finance", email: "william.hernandez@example.com", shift: "day", subscribed: false, otp: "5678" },
    { id: 11, name: "Sophia Lopez", department: "HR", email: "sophia.lopez@example.com", shift: "night", subscribed: true, otp: "9101" },
    { id: 12, name: "James Taylor", department: "Marketing", email: "james.taylor@example.com", shift: "casual", subscribed: false, otp: "1122" },
    { id: 13, name: "Charlotte Anderson", department: "Engineering", email: "charlotte.anderson@example.com", shift: "day", subscribed: true, otp: "3344" },
    { id: 14, name: "Daniel Thomas", department: "Finance", email: "daniel.thomas@example.com", shift: "night", subscribed: false, otp: "5566" },
    { id: 15, name: "Mia Jackson", department: "HR", email: "mia.jackson@example.com", shift: "casual", subscribed: true, otp: "7788" },
    { id: 16, name: "Matthew White", department: "Marketing", email: "matthew.white@example.com", shift: "day", subscribed: true, otp: "9900" },
    { id: 17, name: "Ava Harris", department: "Engineering", email: "ava.harris@example.com", shift: "night", subscribed: false, otp: "1234" },
    { id: 18, name: "Ethan Martin", department: "Finance", email: "ethan.martin@example.com", shift: "casual", subscribed: false, otp: "5678" },
    { id: 19, name: "Isabella Thompson", department: "HR", email: "isabella.thompson@example.com", shift: "day", subscribed: true, otp: "9101" },
    { id: 20, name: "Alexander Garcia", department: "Marketing", email: "alexander.garcia@example.com", shift: "night", subscribed: true, otp: "1122" },
    { id: 21, name: "Liam Martinez", department: "Engineering", email: "liam.martinez@example.com", shift: "casual", subscribed: false, otp: "3344" },
    { id: 22, name: "Avery Rodriguez", department: "Finance", email: "avery.rodriguez@example.com", shift: "day", subscribed: false, otp: "5566" },
    { id: 23, name: "Joshua Lee", department: "HR", email: "joshua.lee@example.com", shift: "night", subscribed: true, otp: "7788" },
    { id: 24, name: "Grace Walker", department: "Marketing", email: "grace.walker@example.com", shift: "casual", subscribed: false, otp: "9900" },
    { id: 25, name: "Lucas Hall", department: "Engineering", email: "lucas.hall@example.com", shift: "day", subscribed: true, otp: "1234" },
    { id: 26, name: "Chloe Allen", department: "Finance", email: "chloe.allen@example.com", shift: "night", subscribed: true, otp: "5678" },
    { id: 27, name: "Jacob Young", department: "HR", email: "jacob.young@example.com", shift: "casual", subscribed: false, otp: "9101" },
    { id: 28, name: "Sofia King", department: "Marketing", email: "sofia.king@example.com", shift: "day", subscribed: false, otp: "1122" },
    { id: 29, name: "Ryan Scott", department: "Engineering", email: "ryan.scott@example.com", shift: "night", subscribed: true, otp: "3344" },
    { id: 30, name: "Evelyn Green", department: "Finance", email: "evelyn.green@example.com", shift: "casual", subscribed: true, otp: "5566" },
    { id: 31, name: "Jack Adams", department: "HR", email: "jack.adams@example.com", shift: "day", subscribed: false, otp: "7788" },
    { id: 32, name: "Zoe Nelson", department: "Marketing", email: "zoe.nelson@example.com", shift: "night", subscribed: false, otp: "9900" },
    { id: 33, name: "Nathan Carter", department: "Engineering", email: "nathan.carter@example.com", shift: "casual", subscribed: true, otp: "1234" },
    { id: 34, name: "Mason Mitchell", department: "Finance", email: "mason.mitchell@example.com", shift: "day", subscribed: false, otp: "5678" },
    { id: 35, name: "Ella Perez", department: "HR", email: "ella.perez@example.com", shift: "night", subscribed: true, otp: "9101" },
    { id: 36, name: "Owen Roberts", department: "Marketing", email: "owen.roberts@example.com", shift: "casual", subscribed: true, otp: "1122" },
    { id: 37, name: "Layla Ramirez", department: "Engineering", email: "layla.ramirez@example.com", shift: "day", subscribed: false, otp: "3344" },
    { id: 38, name: "Dylan Turner", department: "Finance", email: "dylan.turner@example.com", shift: "night", subscribed: false, otp: "5566" },
    { id: 39, name: "Scarlett Phillips", department: "HR", email: "scarlett.phillips@example.com", shift: "casual", subscribed: true, otp: "7788" },
    { id: 40, name: "Leo Campbell", department: "Marketing", email: "leo.campbell@example.com", shift: "day", subscribed: true, otp: "9900" },
    { id: 41, name: "Lillian Parker", department: "Engineering", email: "lillian.parker@example.com", shift: "night", subscribed: false, otp: "1234" },
    { id: 42, name: "Aiden Evans", department: "Finance", email: "aiden.evans@example.com", shift: "casual", subscribed: false, otp: "5678" },
    { id: 43, name: "Samantha Edwards", department: "HR", email: "samantha.edwards@example.com", shift: "day", subscribed: true, otp: "9101" },
    { id: 44, name: "Benjamin Collins", department: "Marketing", email: "benjamin.collins@example.com", shift: "night", subscribed: true, otp: "1122" },
    { id: 45, name: "Victoria Stewart", department: "Engineering", email: "victoria.stewart@example.com", shift: "casual", subscribed: false, otp: "3344" },
    { id: 46, name: "Isaiah Sanchez", department: "Finance", email: "isaiah.sanchez@example.com", shift: "day", subscribed: false, otp: "5566" },
    { id: 47, name: "Aria Morris", department: "HR", email: "aria.morris@example.com", shift: "night", subscribed: true, otp: "7788" },
    { id: 48, name: "Isaac Rogers", department: "Marketing", email: "isaac.rogers@example.com", shift: "casual", subscribed: true, otp: "9900" },
    { id: 49, name: "Ellie Reed", department: "Engineering", email: "ellie.reed@example.com", shift: "day", subscribed: false, otp: "1234" },
    { id: 50, name: "Sebastian Cook", department: "Finance", email: "sebastian.cook@example.com", shift: "night", subscribed: false, otp: "5678" },
  ]);
  

  const handleSubscriptionToggle = (id: number) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === id ? { ...emp, subscribed: !emp.subscribed } : emp
      )
    );
  };

   const handleAddEmployee = (newEmployee: { id: number; name: string; department: string; email: string; shift: string; subscribed: boolean; otp: string }) => {
   setEmployees([...employees, newEmployee]);
  };

  // Function to send OTP to individual employee
  const handleSendOtp = (id: number) => {
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
      // Logic to send OTP (for example, email or API call)
      alert(`OTP sent to ${employee.name}: ${employee.otp}`);
    }
  };

  // Function to send OTP to all subscribed employees in a specific shift
  const handleSendOtpToAll = (shift: string) => {
    const shiftEmployees = employees.filter(emp => emp.shift === shift && emp.subscribed);
    shiftEmployees.forEach(employee => {
      // Logic to send OTP (for example, email or API call)
      alert(`OTP sent to ${employee.name}: ${employee.otp}`);
    });
  };

  return (
    <>
      <section>
        <div className="row" style={{ maxWidth: '100%' }}>
          <div className="col-md-3 col-12 bg-SkyBlue p-4 sidebar">
            <div className="col">
              <img src="/QRG-pvt-ltd.png" alt="logo" className="img-fluid p-4" style={{ maxWidth: "100%" }} />
            </div>
            <div className="list-group align-items-baseline">
              <button className="list-group-item m-1 font-w600 lsitStyle" onClick={() => setCurrentView("dashboard")}>
                <FontAwesomeIcon icon={faCubesStacked} style={{ marginRight: "10px", color: '#3C91E6' }} /> Dashboard
              </button>
              <button className="list-group-item m-1 font-w600 lsitStyle" onClick={() => setCurrentView("day")}>
                <FontAwesomeIcon icon={faSun} style={{ marginRight: "10px", color: '#3C91E6' }} /> Day Shift
              </button>
              <button className="list-group-item m-1 font-w600 lsitStyle" onClick={() => setCurrentView("night")}>
                <FontAwesomeIcon icon={faMoon} style={{ marginRight: "10px", color: '#3C91E6' }} /> Night Shift
              </button>
              <button className="list-group-item m-1 font-w600 lsitStyle" onClick={() => setCurrentView("casual")}>
                <FontAwesomeIcon icon={faUserCheck} style={{ marginRight: "10px", color: '#3C91E6' }} /> Casual Shift
              </button>
              <button className="list-group-item m-1 font-w600 lsitStyle" onClick={() => setCurrentView("subscribed")}>
                <FontAwesomeIcon icon={faUserTag} style={{ marginRight: "10px", color: '#3C91E6' }} /> Subscribed Employees
              </button>
              <button className="list-group-item m-1 font-w600 lsitStyle" onClick={() => setCurrentView("add")}>
                <FontAwesomeIcon icon={faUserPlus} style={{ marginRight: "10px", color: '#3C91E6' }} /> Add Employee
              </button>
              <button className="list-group-item m-1 font-w600 lsitStyle" onClick={handleLogout}>
                <FontAwesomeIcon icon={faArrowRightFromBracket} style={{ marginRight: "10px", color: '#3C91E6' }} /> Logout
              </button>
            </div>
          </div>

          <div className="col-md-9 col-12">
            {/* Show the current view based on state */}
            {currentView === "dashboard" && <Dashboard employees={employees}/>}
            {currentView === "day" && (
              <EmployeeList
                employees={employees.filter((emp) => emp.shift === "day"  && emp.subscribed === false) }
                onSubscriptionToggle={handleSubscriptionToggle}
                onSendOtp={handleSendOtp}
                onSendOtpToAll={handleSendOtpToAll}
              />
            )}
            {currentView === "night" && (
              <EmployeeList
                employees={employees.filter((emp) => emp.shift === "night" && emp.subscribed === false)}
                onSubscriptionToggle={handleSubscriptionToggle}
                onSendOtp={handleSendOtp}
                onSendOtpToAll={handleSendOtpToAll}
              />
            )}
            {currentView === "casual" && (
              <EmployeeList
                employees={employees.filter((emp) => emp.shift === "casual")}
                onSubscriptionToggle={handleSubscriptionToggle}
                onSendOtp={handleSendOtp}
                onSendOtpToAll={handleSendOtpToAll}
              />
            )}
            {currentView === "subscribed" && (
              <EmployeeList
                employees={employees.filter((emp) => emp.subscribed)}
                onSubscriptionToggle={handleSubscriptionToggle}
                onSendOtp={handleSendOtp}
                onSendOtpToAll={handleSendOtpToAll}
              />
            )}
            {currentView === "add" && <AddEmployeeForm onAddEmployee={handleAddEmployee} />}
          </div>
        </div>
      </section>
    </>
  );
};

export default ManagementPage;
