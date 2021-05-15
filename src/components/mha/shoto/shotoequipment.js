import React from "react";
// Components
import Equipment from "../../../equipment";
import Backbutton from "../../backbutton";

function Shotoequip() {
  return (
    <div>
      <Backbutton backroute="/MHAM" />
      <Equipment
        // Styling
        h1Class="h1-position"
        themeColor1="band-workouts Lblue"
        themeColor2="weight-workouts Lblue"
        themeColor3="body-workouts Lblue"
        // Bands/equipment
        bandSVG="greenSVG"
        SVGcolor="rgba(0, 255, 255, 1.2)"
        //Pathing
        bandpath="/shotoband"
        weightpath="/femaleshounen"
        bodypath="/femaleshounen"
      />
    </div>
  );
}

export default Shotoequip;
