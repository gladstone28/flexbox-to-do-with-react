import React from "react";

const DayRow = ({ day, secondary = false, taskText = "" }) => {
  return (
    <div className={`row ${secondary ? "secondary-background" : ""}`}>
      <div className="day square">
        <h3>{day}</h3>
      </div>
      <div className="task square">
        {taskText ? <p>{taskText}</p> : null}
      </div>
      <div className="task square"></div>
      <div className="task square"></div>
    </div>
  );
};

export default DayRow;
