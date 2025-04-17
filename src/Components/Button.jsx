



import React from "react";

const Button = ({ label, onClick, type = "button"  }) => {
  return (
    <button type={type} className={`button `} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
