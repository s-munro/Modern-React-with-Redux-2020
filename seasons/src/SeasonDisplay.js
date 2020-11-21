import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "Let's get that beach body",
    iconName: "sun",
  },
  winter: {
    text: "Burr, it's chilly willy!",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
  // <div>
  //   <h2>Hey there!</h2>
  //   You are located at approximately Latitude: {props.lat}, Longitude:{" "}
  //   {props.long}
  //   <br />
  //   (unless you are using a VPN, you sneak)
  //   <br />
  //   The season is {season}!
  // </div>
};

export default SeasonDisplay;
