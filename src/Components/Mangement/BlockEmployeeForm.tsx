import React, { useState } from 'react';

const BlockEmployeeForm = ({ onBlock }: { onBlock: (id: number) => void }) => {
  const [employeeId, setEmployeeId] = useState('');

  const handleBlock = () => {
    onBlock(Number(employeeId));
    setEmployeeId('');
  };

  return (
    <div>
      <h3>Block Employee</h3>
      <input type="text" className='m-1' value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} placeholder="Employee ID" />
      <button className="btn btn-danger m-1" onClick={handleBlock}>Block</button>
    </div>
  );
};

export default BlockEmployeeForm;
