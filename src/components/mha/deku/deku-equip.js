import React from "react";
// Components
import Equipment from "../../../equipment";
import Backbutton from "../../backbutton";

function Dekuequip() {
  return (
    <div>
      <Backbutton backroute="/MHAM" />
      <Equipment
        // Styling
        h1Class="h1-position greenText"
        themeColor1="band-workouts Green"
        themeColor2="weight-workouts Green"
        themeColor3="body-workouts Green"
        // Bands
        bandSVG="greenSVG"
        SVGcolor="rgb(13, 216, 114)"
        //Pathing
        bandpath="/dekubandworkout"
        weightpath="/"
        bodypath="/"
      />
    </div>
  );
}

export default Dekuequip;
