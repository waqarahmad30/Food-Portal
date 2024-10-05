import React, { useState } from 'react';
import Header from '../Header';
import './WaiterPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const WaiterPage = () => {
  const [otp, setOtp] = useState<number>();
  const [employees] = useState([
    { id: 1, name: 'John Doe', department: 'Engineering', shift: 'day', OTP: 1234,imgSRC:'/waqar.jpeg' },
    { id: 2, name: 'Jane Smith', department: 'HR', shift: 'night', OTP: 5678 },
  ]);
  const [isFound, setFound] = useState<boolean | null>(null);
  const [foundEmployee, setFoundEmployee] = useState<any>(null);

  const getOTP = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(Number(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the form from submitting and reloading the page
    const employee = employees.find(emp => emp.OTP === otp);
    if (employee) {
      setFound(true);
      setFoundEmployee(employee);
    } else {
      setFound(false);
      setFoundEmployee(null);
    }
  };

  return (
    <div>
      <Header />
      <section className='container h-70vh align-content-center'>
        <div className='row p-2 justify-content-center'>
          <div className='col-md-6 p-2 bg-SkyBlue BorderRadius'>
            <h1 className='text-center p-1 m-2'>Verify Employee</h1>
            <form onSubmit={handleSubmit}>
              <div className='form-group mb-4'>
                <label className='p-1'>Enter the Employee OTP</label>
                <input type='text' className='form-control p-1' placeholder='Enter OTP' onChange={getOTP} />
              </div>
              <div className='text-center p-1'>
                <button type='submit' className='btn btn-1'>Verify</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {isFound !== null && (
        <div className='text-center mt-4'>
          {isFound ? (
            <>
            {/* <div className='row justify-content-center' style={{maxWidth:'70%'}}>
                <h2>Verified <FontAwesomeIcon icon={faCircleCheck} style={{color:'green'}} /></h2>
                
                <div className='col-4'>
                    <ul>
                        <li>ID: {foundEmployee.id}</li>
                        <li>Name: {foundEmployee.name}</li>
                        <li>Department: {foundEmployee.department}</li>
                        <li>Shift: {foundEmployee.shift}</li>
                    </ul>
                </div>
                <div className='col-4'>
                    <img src={foundEmployee.imgSRC} alt={foundEmployee.name} style={{width:150}}/>
                </div>

              </div>
                
            
              <button className='btn btn-1' onClick={() => setFound(null)}>Done</button> */}
              <section className='conatiner'>
                <div className='row justify-content-center align-content-center verifyCard' style={{maxWidth:'100%'}}>
                <div className='row justify-content-center align-content-center bg-SkyBlue BorderRadius'style={{maxWidth:'70%'}}>
                <div className='p-4'>
                <h2>Verified <FontAwesomeIcon icon={faCircleCheck} style={{color:'green',paddingLeft: '10px'}} /></h2>
                </div>
                  <div className='col-md-6'>
                    <img src={foundEmployee.imgSRC} alt={foundEmployee.name} style={{maxWidth:'50%',borderRadius:'2rem'}}/>
                  </div>
                  <div className='col-md-6 align-content-center'>
                    <ul className='listStyle'>
                        <li><b>ID: </b>{foundEmployee.id}</li>
                        <li><b>Name:</b> {foundEmployee.name}</li>
                        <li><b>Department:</b> {foundEmployee.department}</li>
                        <li><b>Shift: </b>{foundEmployee.shift}</li>
                    </ul>
                  </div>
                  <div className='p-4'>
                  <button className='btn btn-1' onClick={() => setFound(null)}>Done</button>
                  </div>
                </div>

                </div>
                
              </section>
            </>
          ) : (
            <>
            <section className='container InvalidCard'>
            <div className='row justify-content-center' style={{}}>
              <div className='col-md-6 justify-content-center align-content-center bg-danger BorderRadius' style={{maxWidth:'50%'}}>
                <div className='p-4'>
                  <h2>Invalid <FontAwesomeIcon icon={faCircleXmark} style={{color:'',paddingLeft:'10px'}}/></h2>
                </div>
                <div className='p-4'>
                <button className='btn btn-1' onClick={() => setFound(null)}>Try Again</button>
                </div>
              </div>
            </div>

            </section>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default WaiterPage;
