import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import EmployeeList from './EmployeeList';
import BlockEmployeeForm from './BlockEmployeeForm';
import AddEmployeeForm from './AddEmployeeForm';
import './managementPage.css';
const ManagementPage = () => {
    const navigate = useNavigate();
  const [currentView, setCurrentView] = useState<'day' | 'night' | 'block' | 'add' | null>(null);
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', department: 'Engineering', shift: 'day' },
    { id: 2, name: 'Jane Smith', department: 'HR', shift: 'night' },
  ]);

  const handleDelete = (id: number, permanent: boolean) => {
    if (permanent) {
      setEmployees(employees.filter(emp => emp.id !== id));
    } else {
      // Temporary delete, you can implement the logic here
    }
  };

  const handleAddEmployee = (newEmployee: { id: number; name: string; shift: string; department: string }) => {
    setEmployees([...employees, newEmployee]);
  };

  return (
    <div>
      <Header />

      <div className="container mt-4 ">
        <h2 className="text-center">Management Portal</h2>

        <div className="row mt-4 borderStyle">
          <div className="col-md-3 bg-SkyBlue borderStyle p-4">
            <div className="list-group">
              <button className="list-group-item m-2 btn btn-1" onClick={() => setCurrentView('day')}>Day Shift</button>
              <button className="list-group-item m-2 btn btn-1" onClick={() => setCurrentView('night')}>Night Shift</button>
              <button className="list-group-item m-2 btn btn-1" onClick={() => setCurrentView('block')}>Block Employee</button>
              <button className="list-group-item m-2 btn btn-1" onClick={() => setCurrentView('add')}>Add Employee</button>
            </div>
          </div>

          <div className="col-md-9 p-4">
            {currentView === 'day' && (
              <div>
                <h3>Day Shift Employees</h3>
                <EmployeeList employees={employees.filter(emp => emp.shift === 'day')} onDelete={handleDelete} />
              </div>
            )}
            {currentView === 'night' && (
              <div>
                <h3>Night Shift Employees</h3>
                <EmployeeList employees={employees.filter(emp => emp.shift === 'night')} onDelete={handleDelete} />
              </div>
            )}
            {currentView === 'block' && <BlockEmployeeForm onBlock={(id) => handleDelete(id, true)} />}
            {currentView === 'add' && <AddEmployeeForm onAdd={handleAddEmployee} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementPage;
