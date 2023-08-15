import React from 'react';
import Button from './Button';
import { container } from '../css/Signup.css';

const Signup = () => {
  return (
    <div className="container">
      <h2>User Registration</h2>
      <form action="process_registration.php" method="post">
        <div className="mb-3">
          <label htmlFor="id" className="form-label">ID:</label>
          <input type="text" className="form-control" id="id" name="id" />
        </div>
        
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">Username:</label>
          <input type="text" className="form-control" id="userName" name="userName" />
        </div>
        
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" className="form-control" id="password" name="password" />
        </div>
        
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name:</label>
          <input type="text" className="form-control" id="fullName" name="fullName" />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Gender:</label>
          <div className="form-check">
            <input type="radio" className="form-check-input" id="male" name="gender" value="Male" />
            <label className="form-check-label" htmlFor="male">Male</label>
          </div>
          <div className="form-check">
            <input type="radio" className="form-check-input" id="female" name="gender" value="Female" />
            <label className="form-check-label" htmlFor="female">Female</label>
          </div>
        </div>
        
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age:</label>
          <input type="number" className="form-control" id="age" name="age" />
        </div>
        
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">Contact:</label>
          <input type="tel" className="form-control" id="contact" name="contact" />
        </div>
        
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" name="email" />
        </div>
        
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address:</label>
          <textarea className="form-control" id="address" name="address" rows="4" cols="50"></textarea>
        </div>
        
        <div className="mb-3">
          <label htmlFor="userType" className="form-label">User Type:</label>
          <select className="form-select" id="userType" name="userType">
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>
        
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Signup;
