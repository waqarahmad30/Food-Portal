import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here, you can add real validation or authentication logic
    if (email === "management@company.com") {
      localStorage.setItem('authToken', 'some-auth-token');
      navigate("/management"); // Navigate to Management Page
    } else if (email === "waiter@company.com") {
      localStorage.setItem('authToken', 'some-auth-token');
      navigate("/waiter"); // Navigate to Waiter Page
    } else {
      alert("Invalid email address");
    }
  };

  return (
    <section className="container h-100vh d-flex align-items-center justify-content-center">
      <div className="row bg-SkyBlue h-50vh BorderRadius align-content-center rw">
        <div className="col-md-6 p-2rem text-center align-content-center">
          <img src="/QRG-pvt-ltd.png" alt="logo" className="img-adj" />
        </div>
        <div className="col-md-6">
          <h1 className="p-2 text-center">LogIn</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group p-2">
              <label>Email address</label>
              <input
                type="email"
                className="form-control p-1"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group p-2">
              <label>Password</label>
              <input
                type="password"
                className="form-control p-1"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="p-2 text-center">
              <button type="submit" className="btn btn-1 p-2">
                LogIn
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
