import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

let practiceLinks = ["classes", "photography", "retreats", "events"];

const PracticeView1 = () => (
  <Fragment>
    <div className="flex-parent">
      {practiceLinks.map((link, i) => (
        <NavLink
          to={`/${link}`}
          key={`key-${i.toString()}`}
          alt="practice"
          activeClassName="hidden"
        >
          {link.toUpperCase()}
        </NavLink>
      ))}
    </div>
    <div className="practice-container" id="practice-1">
      <h1>Practice 1</h1>
    </div>
    <div className="practice-container" id="practice-2">
      <h1>Practice 2</h1>
    </div>
    <div className="practice-container" id="practice-3">
      <h1>Practice 3</h1>
    </div>
    <div className="practice-container" id="practice-4">
      <h1>Practice 4</h1>
    </div>
  </Fragment>
);

export default PracticeView1;
