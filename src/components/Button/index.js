import React from 'react';
import './index.css';

const Button = ({ onClick, text }) => {
  return (
    <button className="update-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
