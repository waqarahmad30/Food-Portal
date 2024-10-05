import React from 'react';

const EmployeeList = ({ employees, onDelete }: { employees: any[], onDelete: (id: number, permanent: boolean) => void }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.department}</td>
            <td>
              <button className="btn btn-warning m-1" onClick={() => onDelete(employee.id, false)}>Delete</button>
              <button className="btn btn-danger m-1" onClick={() => onDelete(employee.id, true)}>Block</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;
