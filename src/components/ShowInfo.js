import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const ShowInfo = ({ jobInfo }) => {
  const { title, duties, company, dates } = jobInfo;
  return (
    <>
      <h3>{title}</h3>
      <div className="company-name">{company}</div>
      <p className="dates">{dates}</p>
      <div>
        {duties.map((duty, index) => {
          return (
            <div className="points" key={index}>
              <FaAngleDoubleRight className="marker" />
              <span className="info">{duty}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShowInfo;
