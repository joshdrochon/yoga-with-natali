import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

let practiceLinks = ["classes", "photography", "retreats", "events"];

const PracticeView1 = () => (
  <Fragment>
    <div className="flex-parent">
      {practiceLinks.map((link, i) => (
        <NavLink to={`/${link}`} key={`key-${i.toString()}`} alt="practice">
          {link.toUpperCase()}
        </NavLink>
      ))}
    </div>
  </Fragment>
);

export default PracticeView1;
