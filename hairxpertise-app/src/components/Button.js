import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Button = ({ to, text }) => {
  return (
    <button>
      <Link to={to}>{text}</Link>
    </button>
  );
};

export default Button;
