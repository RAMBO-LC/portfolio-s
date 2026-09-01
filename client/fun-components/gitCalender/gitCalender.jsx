import { GitHubCalendar } from "react-github-calendar";
import React from "react";
import "./gitCalender.css";

const gitCalender = () => {
  return (
    <div className="flex-item">
      <GitHubCalendar username="RAMBO-LC" />
    </div>
  );
};

export default gitCalender;
