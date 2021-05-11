import React, { useEffect } from "react";
// Components
import Workoutheader from "../workoutheroheader";
import Workoutlayout from "../../workoutlayout/workoutlayout";
import Scrolltop from "../../scrolltotop";
import Workoutguide from "../../workoutlayout/workoutguide";
// Dependancies
import { Container, Col, Row } from "react-bootstrap";
import AOS from "aos";
// CSS
import "../../../CSS/workouts/workout1.css";
// assets
import deku from "../../../assets/deku.png";
import Chestpng from "../../../assets/bodyparts/chestsvg.svg";
// Assets
import Chest from "../../bodyparts/chest";
import Arms from "../../bodyparts/arms";
import Back from "../../bodyparts/back";
import Abs from "../../bodyparts/chest";
import Legs from "../../bodyparts/legs";
import Triceps from "../../bodyparts/triceps";
import Shoulders from "../../bodyparts/shouders";

// Workout gifs
import chestband1 from "../../../assets/workoutvids/bandchest1.gif";
import chestband2 from "../../../assets/workoutvids/bandchest2.gif";
import chestband3 from "../../../assets/workoutvids/bandchest3.gif";
import chestband4 from "../../../assets/workoutvids/bandchest4.gif";
import chestband5 from "../../../assets/workoutvids/bandchest5.gif";

function Dekuworkout1() {
  const SVGS = {
    chest: (
      <Chest
        className="svg"
        height="100%"
        width="100%"
        color="rgb(13, 216, 114)"
      />
    ),
    back: (
      <Back
        className="svg"
        height="100%"
        width="100%"
        color="rgb(13, 216, 114)"
      />
    ),
    arms: (
      <Arms
        className="svg"
        height="100%"
        width="100%"
        color="rgb(13, 216, 114)"
      />
    ),
    abs: (
      <Abs
        className="svg"
        height="100%"
        width="100%"
        color="rgb(13, 216, 114)"
      />
    ),
    legs: (
      <Legs
        className="svg"
        height="100%"
        width="100%"
        color="rgb(13, 216, 114)"
      />
    ),
    triceps: (
      <Triceps
        className="svg"
        height="100%"
        width="100%"
        color="rgb(13, 216, 114)"
      />
    ),
    shoulders: (
      <Shoulders
        className="svg"
        height="100%"
        width="100%"
        color="rgb(13, 216, 114)"
      />
    ),
  };
  return (
    <div className="parent-container">
      <Scrolltop
        scrolltopclass="scroll-up-btn-ctn green-btn"
        arrowup="arrow-up"
        scrollTo="charheader"
      />
      <Workoutheader
        charheader="charheader"
        charimg={deku}
        imgClass="char-img"
        rowTheme="Wlayout-row-1 rowGreen"
        col1="col-1 greenTheme"
        col2="col-2 greentheme"
        charName="Izuku Midorya"
        heroName="Deku"
        heroHeight="166cm"
        heroBodytype="Ectomorph"
        charDesc="If you dont have an entire beach to clean up near you then you can give these band workouts a try, These workouts are perfect for an ectomorph which is a typically smaller frame"
        pDescription="p-description greenText"
        headerTheme="hero-name greenText"
        heroDetails="hero-details greenText"
      />
      <Workoutguide
        colclass="guide-col green-border"
        colclass2="guide-col-2 green-border"
        icons="icon"
        themecolor="guide-h1 green-color"
        themecolorP="guide-p green-color"
        structureh1="structure-h1 green-color"
      />
      {/* 
      CHEST WORKOUT *******************************************************************
       */}
      <Workoutlayout
        workoutH1="Band push(Chest, legs, tricep) workouts"
        workoutHeader="workouth1 green-color"
        row1="row-1 green-border"
        svg={SVGS.chest}
        h1Color="workout-name green-color"
        pClass="workout-desc green-color"
        // Workout descriptions
        workoutDesc1="Lorem ipsum dolor sit amet consectetur adipisicing elit.  "
        // imgs
        bodypartworkout1="Chest workout"
        // Accordion workout props
        row="acc-row-1 "
        setH1="set-h1"
        workoutGif={chestband1}
        workoutGif2={chestband2}
        workoutGif3={chestband3}
        workoutGif4={chestband4}
        workoutGif5={chestband2}
        workoutGif6={chestband2}
        ownershipP="The following video is owned by athleanx.com"
        workoutTitle="Banded saw"
        workoutTitle2="Crossover pushups or Pushups"
        workoutTitle3="Wrap around press"
        workoutTitle4="Upper chest extension"
        workoutDescription="The first band chest workout is a pushing action with a band blah blah blah band blah blah blah band blah blah blahband blah blah blah"
        workouth1class="workout-name-h1 green-color"
        workoutpclass="workout-desc-p"
        repeatH1="repeat-h1 green-color"
      />
      {/* 
      Shoulder WORKOUT ***************************************************************
       */}
      <Workoutlayout
        row1="row-1 green-border"
        svg={SVGS.shoulders}
        h1Color="workout-name green-color"
        pClass="workout-desc green-color"
        // Workout descriptions
        workoutDesc1="Lorem ipsum dolor sit amet consectetur adipisicing elit.  "
        // imgs
        bodypartworkout1="Shoulder workout"
      />

      {/* 
      TRICEP WORKOUT *****************************************************************
       */}
      <Workoutlayout
        row1="row-1 green-border"
        svg={SVGS.triceps}
        h1Color="workout-name green-color"
        pClass="workout-desc green-color"
        // Workout descriptions
        workoutDesc1="Your triceps make up more than two-thirds of your upper-arm mass. Building thick, developed triceps means building thick, developed arms. And with bands its possible to build that muscle"
        // imgs
        bodypartworkout1="Tricep workout"
      />

      {/* Back workouts */}
      <Workoutlayout
        workoutH1="Band Pull(back, and biceps) workouts"
        workoutHeader="workouth1 green-color"
        row1="row-1 green-border"
        svg={SVGS.back}
        h1Color="workout-name green-color"
        pClass="workout-desc green-color"
        // Workout descriptions
        workoutDesc1="Back workouts are essential to "
        // imgs
        bodypartworkout1="Back workout"
        // Accordion workout
      />
      {/* ARM WORKOUTS */}
      <Workoutlayout
        row1="row-1 green-border"
        svg={SVGS.arms}
        h1Color="workout-name green-color"
        pClass="workout-desc green-color"
        // Workout descriptions
        workoutDesc1="Back workouts are essential to "
        // imgs
        bodypartworkout1="Bicep workout"
        // Accordion workout
      />
      <Workoutlayout
        workoutH1="Leg/Cardio workouts"
        workoutHeader="workouth1 green-color"
        row1="row-1 green-border"
        svg={SVGS.legs}
        h1Color="workout-name green-color"
        pClass="workout-desc green-color"
        // Workout descriptions
        workoutDesc1="Lorem ipsum dolor sit amet consectetur adipisicing elit.  "
        // imgs
        bodypartworkout1="Leg workout"
      />
    </div>
  );
}

export default Dekuworkout1;
