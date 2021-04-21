import React from "react";

const NavCompany = ({ name, handleClick, index }) => {
  return (
    <div className="btn">
      <button onClick={() => handleClick(index)}>{name}</button>
    </div>
  );
};

export default NavCompany;
