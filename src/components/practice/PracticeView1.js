import React from "react";
import { Link } from "react-router-dom";
import classes from "./../../assets/images/practice/selectors/classes.png";
import photography from "./../../assets/images/practice/selectors/photography.png";
import retreats from "./../../assets/images/practice/selectors/retreats.png";
import schedule from "./../../assets/images/practice/selectors/schedule.png";

const PracticeView1 = () => (
  <div className="flex-parent">
    <div className="flex-child">
      <Link to="/photography">
        <img src={photography} />
      </Link>
    </div>
    <div className="flex-child">
      <Link to="#">
        <img src={classes} />
      </Link>
    </div>
    <div className="flex-child">
      <Link to="#">
        <img src={retreats} />
      </Link>
    </div>
    <div className="flex-child">
      <Link to="#">
        <img src={schedule} />
      </Link>
    </div>
  </div>
);

export default PracticeView1;
