import React from "react";
import DayRow from "./DayRow";

const Week = () => {
  return (
    <div className="week">
      <DayRow day="MON" secondary={true} taskText="Insert some information about your week here :)" />
      <DayRow day="TUE" />
      <DayRow day="WED" secondary={true} />
      <DayRow day="THU" />
      <DayRow day="FRI" secondary={true} />
    </div>
  );
};

export default Week;
