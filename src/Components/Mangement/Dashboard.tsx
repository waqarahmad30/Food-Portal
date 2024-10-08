import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faUserCheck, faUtensils } from "@fortawesome/free-solid-svg-icons";
import './Dashboard.css'; // Ensure this file has styles for the card layout
interface Employee {
    id: number;
    name: string;
    department: string;
    email: string;
    shift: string;
    subscribed: boolean;
    otp: string;
  }

const Dashboard = ({ employees }: { employees: Employee[] }) => {
  // State to manage employee counts
  const [morningCount, setMorningCount] = useState(0);
  const [nightCount, setNightCount] = useState(0);
  const [casualCount, setCasualCount] = useState(0);
  const [morningSubscribed, setMorningSubscribed] = useState(0);
  const [nightSubscribed, setNightSubscribed] = useState(0);
  const [casualSubscribed, setCasualSubscribed] = useState(0);

  useEffect(() => {
    // Update the counts on component load
    const totalMorning = employees.filter(emp => emp.shift === 'day').length;
    const totalNight = employees.filter(emp => emp.shift === 'night').length;
    const totalCasual = employees.filter(emp => emp.shift === 'casual').length;
    const totalMorningSubscribed = employees.filter(emp => emp.shift === 'day' && emp.subscribed).length;
    const totalNightSubscribed = employees.filter(emp => emp.shift === 'night' && emp.subscribed).length;
    const totalCasualSubscribed = employees.filter(emp => emp.shift === 'casual' && emp.subscribed).length;

    // Set the states with animated counters
    animateCounter(setMorningCount, totalMorning);
    animateCounter(setNightCount, totalNight);
    animateCounter(setCasualCount, totalCasual);
    animateCounter(setMorningSubscribed, totalMorningSubscribed);
    animateCounter(setNightSubscribed, totalNightSubscribed);
    animateCounter(setCasualSubscribed, totalCasualSubscribed);
  }, [employees]);

  // Function to animate the counters
  const animateCounter = (setCounter:any, endValue:any) => {
    let startValue = 0;
    const duration = 1000; // 1 second duration for animation
    const increment = endValue / duration * 10;

    const counterInterval = setInterval(() => {
      startValue += increment;
      if (startValue >= endValue) {
        clearInterval(counterInterval);
        setCounter(endValue);
      } else {
        setCounter(Math.floor(startValue));
      }
    }, 10);
  };

  return (
    <div className="row">
        <h2 className='p-4'>Welcome to Food portal</h2>
      <div className="col-md-4">
        <div className="card dashboard-card">
          <FontAwesomeIcon icon={faSun} className="icon" />
          <h3>{morningCount}</h3>
          <p>Total<br></br> Morning Shift Employees</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card dashboard-card">
          <FontAwesomeIcon icon={faMoon} className="icon" />
          <h3>{nightCount}</h3>
          <p>Total<br></br> Night Shift Employees</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card dashboard-card">
          <FontAwesomeIcon icon={faUserCheck} className="icon" />
          <h3>{casualCount}</h3>
          <p>Total<br></br> Casual Shift Employees</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card dashboard-card">
        <FontAwesomeIcon icon={faUtensils} className="icon" />
          <h3>{morningSubscribed}</h3>
          <p>Subscribed<br></br> Morning Shift Employees</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card dashboard-card">
        <FontAwesomeIcon icon={faUtensils}  className="icon" />
          <h3>{nightSubscribed}</h3>
          <p>Subscribed<br></br> Night Shift Employees</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card dashboard-card">
        <FontAwesomeIcon icon={faUtensils}  className="icon" />
          <h3>{casualSubscribed}</h3>
          <p>Subscribed<br></br> Casual Shift Employees</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
