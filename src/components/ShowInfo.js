import React from "react";

const ShowInfo = ({ jobInfo }) => {
  const { title, duties, company, dates } = jobInfo;
  return (
    <>
      <div>{title}</div>
      <div>{company}</div>
      <div>{dates}</div>
      {duties.map((duty, index) => {
        return (
          <div key={index}>
            <span> > </span>
            <p>{duty}</p>
          </div>
        );
      })}
    </>
  );
};

export default ShowInfo;
