import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './Components/CredentialPage/LoginPage';
import ManagementPage from './Components/Mangement/ManagementPage';
import WaiterPage from './Components/Resturant/WaiterPage';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/management" element={
          <ProtectedRoute>
              <ManagementPage />
          </ProtectedRoute>} />
        <Route path="/waiter" element={
          <ProtectedRoute>
            <WaiterPage />
          </ProtectedRoute>} />
      </Routes>
  );
}

export default App;
