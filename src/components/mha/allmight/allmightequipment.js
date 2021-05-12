import React from "react";
// Components
import Equipment from "../../../equipment";

function Allmightequip() {
  return (
    <div>
      <Equipment
        // Styling
        h1Class="h1-position yellowh1"
        themeColor1="band-workouts Yellow"
        themeColor2="weight-workouts Yellow"
        themeColor3="body-workouts Yellow"
        // Bands
        bandSVG="yellowSVG"
        SVGcolor="rgba(213, 216, 13, 1)"
        //Pathing
        bandpath="/allmightbandworkout"
        weightpath="/femaleshounen"
        bodypath="/femaleshounen"
      />
    </div>
  );
}

export default Allmightequip;
