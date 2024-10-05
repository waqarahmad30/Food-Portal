import React, { useState } from 'react';

const AddEmployeeForm = ({ onAdd }: { onAdd: (employee: { id: number, name: string, shift: string, department: string }) => void }) => {
  const [form, setForm] = useState({ id: '', name: '', shift: 'day', department: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ id: Number(form.id), name: form.name, shift: form.shift, department: form.department });
    setForm({ id: '', name: '', shift: 'day', department: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Employee</h3>
      <input type="text" className='m-1' value={form.id} onChange={(e) => setForm({ ...form, id: e.target.value })} placeholder="ID" required />
      <input type="text" className='m-1' value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name" required />
      <select value={form.shift} className='m-1' onChange={(e) => setForm({ ...form, shift: e.target.value })}>
        <option value="day">Day</option>
        <option value="night">Night</option>
      </select>
      <input type="text" className='m-1' value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} placeholder="Department" required />
      <button type="submit" className="btn btn-primary m-1">Add Employee</button>
    </form>
  );
};

export default AddEmployeeForm;
