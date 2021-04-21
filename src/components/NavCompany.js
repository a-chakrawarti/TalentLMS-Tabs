import React from "react";

const NavCompany = ({ name, handleClick, index }) => {
  return (
    <>
      <button onClick={() => handleClick(index)}>{name}</button>
    </>
  );
};

export default NavCompany;
