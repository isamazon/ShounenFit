import React, { useEffect } from "react";
// Components
import Workoutheader from "../workoutheroheader";
import Workoutlayout from "../../workoutlayout/workoutlayout";
import Scrolltop from "../../scrolltotop";
import Workoutguide from "../../workoutlayout/workoutguide";
import Backbutton from "../../backbutton";
// Dependancies
import { Container, Col, Row } from "react-bootstrap";
import AOS from "aos";
import LazyLoad from "react-lazy-load";
// CSS
import "../../../CSS/workouts/workout1.css";
// assets
import allmight from "../../../assets/allmightHC.png";
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
      <LazyLoad height="100%" width="100%">
        <Chest
          className="svg"
          height="100%"
          width="100%"
          color="rgba(213, 216, 13, 1)"
        />
      </LazyLoad>
    ),
    back: (
      <LazyLoad height="100%" width="100%">
        <Back
          className="svg"
          height="100%"
          width="100%"
          color="rgba(213, 216, 13, 1)"
        />
      </LazyLoad>
    ),
    arms: (
      <LazyLoad height="100%" width="100%">
        <Arms
          className="svg"
          height="100%"
          width="100%"
          color="rgba(213, 216, 13, 1)"
        />
      </LazyLoad>
    ),
    abs: (
      <LazyLoad height="100%" width="100%">
        <Abs
          className="svg"
          height="100%"
          width="100%"
          color="rgba(213, 216, 13, 1)"
        />
      </LazyLoad>
    ),
    legs: (
      <LazyLoad height="100%" width="100%">
        <Legs
          className="svg"
          height="100%"
          width="100%"
          color="rgba(213, 216, 13, 1)"
        />
      </LazyLoad>
    ),
    triceps: (
      <LazyLoad height="100%" width="100%">
        <Triceps
          className="svg"
          height="100%"
          width="100%"
          color="rgba(213, 216, 13, 1)"
        />
      </LazyLoad>
    ),
    shoulders: (
      <LazyLoad height="100%" width="100%">
        <Shoulders
          className="svg"
          height="100%"
          width="100%"
          color="rgba(213, 216, 13, 1)"
        />
      </LazyLoad>
    ),
  };
  return (
    <div className="parent-container">
      <Scrolltop
        scrolltopclass="scroll-up-btn-ctn yellow-btn"
        scrolltophidden="scroll-up-btn-hidden"
        arrowup="arrow-up"
        scrollTo="charheader"
      />
      <Backbutton backroute="/allmightequipment" />
      <Workoutheader
        charheader="charheader"
        charimg={allmight}
        imgClass="char-img"
        rowTheme="Wlayout-row-1 rowYellow"
        col1="col-1 greenTheme"
        col2="col-2 greentheme"
        charName="Yogi Toshinori"
        heroName="All Might"
        heroHeight="218 cm"
        heroBodytype="Ectomorph"
        charDesc="All might has a massive frame when in his muscle form so with band workouts itll be all the same"
        pDescription="p-description yellowText"
        headerTheme="hero-name yellowText"
        heroDetails="hero-details yellowText"
      />
      <Workoutguide
        colclass="guide-col yellow-border"
        colclass2="guide-col-2 yellow-border"
        icons="icon"
        themecolor="guide-h1 yellow-color"
        themecolorP="guide-p yellow-color"
        structureh1="structure-h1 yellow-color"
      />
      {/* 
      CHEST WORKOUT *******************************************************************
       */}
      <Workoutlayout
        workoutH1="Band push(Chest, legs, tricep) workouts"
        workoutHeader="workouth1 yellow-color"
        row1="row-1 yellow-border"
        svg={SVGS.chest}
        h1Color="workout-name yellow-color"
        pClass="workout-desc yellow-color"
        // Workout descriptions
        workoutDesc1="This chest workout uses bands to target specific parts of the chest to increase overall mass with just the use of bands take 15-30 second breaks after each workout before going on to the next"
        // imgs
        bodypartworkout1="Chest workout"
        // Accordion workout props
        row="acc-row-1 "
        setH1="set-h1"
        workoutGif={chestband1}
        workoutGif2={chestband2}
        workoutGif3={chestband3}
        workoutGif4={chestband4}
        workoutGif5={chestband5}
        workoutGif6={chestband2}
        ownershipP="The following video is owned by athleanx.com"
        workoutTitle="Banded saw"
        workoutTitle2="Crossover pushups or Pushups"
        workoutTitle3="Wrap around press"
        workoutTitle4="Upper chest extension"
        workoutTitle5="Punch out extensions"
        workoutTitle6="workout 6"
        workoutDescription1="The first band chest workout is a pushing action with a band blah blah blah band blah blah blah band blah blah blahband blah blah blah"
        workouth1class="workout-name-h1 yellow-color"
        workoutpclass="workout-desc-p"
        repeatH1="repeat-h1 yellow-color"
      />
      {/* 
      Shoulder WORKOUT ***************************************************************
       */}
      <Workoutlayout
        row1="row-1 yellow-border"
        svg={SVGS.shoulders}
        h1Color="workout-name yellow-color"
        pClass="workout-desc yellow-color"
        // Workout descriptions
        workoutDesc1="Lorem ipsum dolor sit amet consectetur adipisicing elit.  "
        // imgs
        bodypartworkout1="Shoulder workout"
        // Accordion workout props
        row="acc-row-1 "
        setH1="set-h1"
        workoutGif={chestband1}
        workoutGif2={chestband2}
        workoutGif3={chestband3}
        workoutGif4={chestband4}
        workoutGif5={chestband5}
        workoutGif6={chestband2}
        ownershipP="The following video is owned by athleanx.com"
        workoutTitle="Shoulder workout 1"
        workoutTitle2="Crossover pushups or Pushups"
        workoutTitle3="Wrap around press"
        workoutTitle4="Upper chest extension"
        workoutTitle5="Punch out extensions"
        workoutTitle6="workout 6"
        workoutDescription1="The first band chest workout is a pushing action with a band blah blah blah band blah blah blah band blah blah blahband blah blah blah"
        workouth1class="workout-name-h1 yellow-color"
        workoutpclass="workout-desc-p"
        repeatH1="repeat-h1 yellow-color"
      />

      {/* 
      TRICEP WORKOUT *****************************************************************
       */}
      <Workoutlayout
        row1="row-1 yellow-border"
        svg={SVGS.triceps}
        h1Color="workout-name yellow-color"
        pClass="workout-desc yellow-color"
        // Workout descriptions
        workoutDesc1="Your triceps make up more than two-thirds of your upper-arm mass. Building thick, developed triceps means building thick, developed arms. And with bands its possible to build that muscle"
        // imgs
        bodypartworkout1="Tricep workout"
        // Accordion workout props
        row="acc-row-1 "
        setH1="set-h1"
        workoutGif={chestband1}
        workoutGif2={chestband2}
        workoutGif3={chestband3}
        workoutGif4={chestband4}
        workoutGif5={chestband5}
        workoutGif6={chestband2}
        ownershipP="The following video is owned by athleanx.com"
        workoutTitle="Shoulder workout 1"
        workoutTitle2="Crossover pushups or Pushups"
        workoutTitle3="Wrap around press"
        workoutTitle4="Upper chest extension"
        workoutTitle5="Punch out extensions"
        workoutTitle6="workout 6"
        workoutDescription1="The first band chest workout is a pushing action with a band blah blah blah band blah blah blah band blah blah blahband blah blah blah"
        workouth1class="workout-name-h1 yellow-color"
        workoutpclass="workout-desc-p"
        repeatH1="repeat-h1 yellow-color"
      />

      {/* Back workouts */}
      <Workoutlayout
        workoutH1="Band Pull(back, and biceps) workouts"
        workoutHeader="workouth1 yellow-color"
        row1="row-1 yellow-border"
        svg={SVGS.back}
        h1Color="workout-name yellow-color"
        pClass="workout-desc yellow-color"
        // Workout descriptions
        workoutDesc1="Back workouts are essential to "
        // imgs
        bodypartworkout1="Back workout"
        // Accordion workout
        // Accordion workout props
        row="acc-row-1 "
        setH1="set-h1"
        workoutGif={chestband1}
        workoutGif2={chestband2}
        workoutGif3={chestband3}
        workoutGif4={chestband4}
        workoutGif5={chestband5}
        workoutGif6={chestband2}
        ownershipP="The following video is owned by athleanx.com"
        workoutTitle="Shoulder workout 1"
        workoutTitle2="Crossover pushups or Pushups"
        workoutTitle3="Wrap around press"
        workoutTitle4="Upper chest extension"
        workoutTitle5="Punch out extensions"
        workoutTitle6="workout 6"
        workoutDescription1="The first band chest workout is a pushing action with a band blah blah blah band blah blah blah band blah blah blahband blah blah blah"
        workouth1class="workout-name-h1 yellow-color"
        workoutpclass="workout-desc-p"
        repeatH1="repeat-h1 yellow-color"
      />
      {/* ARM WORKOUTS */}
      <Workoutlayout
        row1="row-1 yellow-border"
        svg={SVGS.arms}
        h1Color="workout-name yellow-color"
        pClass="workout-desc yellow-color"
        // Workout descriptions
        workoutDesc1="Back workouts are essential to "
        // imgs
        bodypartworkout1="Bicep workout"
        // Accordion workout
        // Accordion workout props
        row="acc-row-1 "
        setH1="set-h1"
        workoutGif={chestband1}
        workoutGif2={chestband2}
        workoutGif3={chestband3}
        workoutGif4={chestband4}
        workoutGif5={chestband5}
        workoutGif6={chestband2}
        ownershipP="The following video is owned by athleanx.com"
        workoutTitle="Shoulder workout 1"
        workoutTitle2="Crossover pushups or Pushups"
        workoutTitle3="Wrap around press"
        workoutTitle4="Upper chest extension"
        workoutTitle5="Punch out extensions"
        workoutTitle6="workout 6"
        workoutDescription1="The first band chest workout is a pushing action with a band blah blah blah band blah blah blah band blah blah blahband blah blah blah"
        workouth1class="workout-name-h1 yellow-color"
        workoutpclass="workout-desc-p"
        repeatH1="repeat-h1 yellow-color"
      />
      <Workoutlayout
        workoutH1="Leg/Cardio workouts"
        workoutHeader="workouth1 yellow-color"
        row1="row-1 yellow-border"
        svg={SVGS.legs}
        h1Color="workout-name yellow-color"
        pClass="workout-desc yellow-color"
        // Workout descriptions
        workoutDesc1="Lorem ipsum dolor sit amet consectetur adipisicing elit.  "
        // imgs
        bodypartworkout1="Leg workout"
        // Accordion workout props
        row="acc-row-1 "
        setH1="set-h1"
        workoutGif={chestband1}
        workoutGif2={chestband2}
        workoutGif3={chestband3}
        workoutGif4={chestband4}
        workoutGif5={chestband5}
        workoutGif6={chestband2}
        ownershipP="The following video is owned by athleanx.com"
        workoutTitle="Shoulder workout 1"
        workoutTitle2="Crossover pushups or Pushups"
        workoutTitle3="Wrap around press"
        workoutTitle4="Upper chest extension"
        workoutTitle5="Punch out extensions"
        workoutTitle6="workout 6"
        workoutDescription1="The first band chest workout is a pushing action with a band blah blah blah band blah blah blah band blah blah blahband blah blah blah"
        workouth1class="workout-name-h1 yellow-color"
        workoutpclass="workout-desc-p"
        repeatH1="repeat-h1 yellow-color"
      />
    </div>
  );
}

export default Dekuworkout1;
