import React from "react";
// Components
import Workoutheader from "../workoutheroheader";
import Workoutlayout from "../../workoutlayout/workoutlayout";
// Dependancies
import { Container, Col, Row } from "react-bootstrap";
// CSS
import "../../../CSS/workouts/workout1.css";
// assets
import allmight from "../../../assets/allmightHC.png";

function Allmightworkout1() {
  return (
    <div>
      <Workoutheader
        charimg={allmight}
        imgClass="char-img"
        rowTheme="Wlayout-row-1 rowYellow"
        col1="col-1 greenTheme"
        col2="col-2 greentheme"
        charName="Yogi Toshinori"
        heroName="Allmight"
        heroHeight="218.44cm"
        heroBodytype="Ectomorph"
        charDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo porro omnis harum quod, culpa sint recusandae neque minima delectus, esse vitae totam labore a ducimus doloremque ipsa! Expedita, consectetur nulla."
        pDescription="p-description yellowText"
        headerTheme="hero-name yellowText"
        heroDetails="hero-details yellowText"
      />
      <Workoutlayout
        workoutH1="Allmight band workout"
        workoutHeader="workouth1 yellow-color"
        // Rows
        row1="row-1 yellow-border"
        row2="row-2 yellow border"
        svgColor="rgba(213, 216, 13, 1)"
        h1Color="yellow-color"
        // Columns
        col1="col-1"
        col2="col-2"
        col3="col-3"
        // imgs
        bodypartworkout1="Chest workout"
        bodypartworkout2="Back workout"
        bodypartworkout3="Leg workout"
        bodypartworkout4="Abs workout"
        bodypartworkout5="Arms workout"
      />
    </div>
  );
}

export default Allmightworkout1;
