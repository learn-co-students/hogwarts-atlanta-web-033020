import piggy from "../porco.png";
import React from "react";

const Nav = props => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span><br></br>
      <span>Greased Filter: </span><button onClick={props.setGreasedFilter}>{props.greasedFilter}</button><br></br>
      <span>Sort Filter: </span><button onClick={props.setSortType}>{props.sortType}</button>
    </div>
  );
};

export default Nav;
