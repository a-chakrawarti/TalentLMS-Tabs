import React from "react";

const NavCompany = ({ name, handleClick, index, dataIndex }) => {
  return (
    <div className="btn-item">
      <button
        className={`btn ${index === dataIndex && "active"}`}
        onClick={() => handleClick(index)}>
        {name}
      </button>
    </div>
  );
};

export default NavCompany;
