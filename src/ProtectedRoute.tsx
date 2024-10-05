import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const authToken = localStorage.getItem('authToken');

  if (!authToken) {
    // If no token, redirect to login
    return <Navigate to="/login" />;
  }

  // If token is found, render the children
  return children;
};

export default ProtectedRoute;
