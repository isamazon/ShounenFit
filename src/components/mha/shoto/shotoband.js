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
import shoto from "../../../assets/shoto.png";
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
import { gsap, TimelineLite, Power3 } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Shotoworkout1() {
  let t1 = new TimelineLite({ delay: 0 });
  useEffect(() => {
    t1.to(".nothing", { y: -15, opacity: 0, ease: "none" }, "Start");

    gsap.from(".trigger1", {
      duration: 0.5,
      x: "0",
      opacity: 0,
      ease: "ease-in",
      ScrollTrigger: {
        trigger: "workoutguide-cont-fluid",
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "restart complete reverse reset",
      },
    });
  });
  const SVGS = {
    chest: (
      <LazyLoad height="100%" width="100%">
        <Chest
          className="svg"
          height="100%"
          width="100%"
          color="rgba(0, 255, 255, 1.2)"
        />
      </LazyLoad>
    ),
    back: (
      <LazyLoad height="100%" width="100%">
        <Back
          className="svg"
          height="100%"
          width="100%"
          color="rgba(0, 255, 255, 1.2)"
        />
      </LazyLoad>
    ),
    arms: (
      <LazyLoad height="100%" width="100%">
        <Arms
          className="svg"
          height="100%"
          width="100%"
          color="rgba(0, 255, 255, 1.2)"
        />
      </LazyLoad>
    ),
    abs: (
      <LazyLoad height="100%" width="100%">
        <Abs
          className="svg"
          height="100%"
          width="100%"
          color="rgba(0, 255, 255, 1.2)"
        />
      </LazyLoad>
    ),
    legs: (
      <LazyLoad height="100%" width="100%">
        <Legs
          className="svg"
          height="100%"
          width="100%"
          color="rgba(0, 255, 255, 1.2)"
        />
      </LazyLoad>
    ),
    triceps: (
      <LazyLoad height="100%" width="100%">
        <Triceps
          className="svg"
          height="100%"
          width="100%"
          color="rgba(0, 255, 255, 1.2)"
        />
      </LazyLoad>
    ),
    shoulders: (
      <LazyLoad height="100%" width="100%">
        <Shoulders
          className="svg"
          height="100%"
          width="100%"
          color="rgba(0, 255, 255, 1.2)"
        />
      </LazyLoad>
    ),
  };
  return (
    <div className="parent-container">
      <Scrolltop
        scrolltopclass="scroll-up-btn-ctn blue-btn "
        scrolltophidden="scroll-up-btn-hidden"
        arrowup="arrow-up"
        scrollTo="charheader"
      />
      <Backbutton backroute="/shotoequipment" />
      <Workoutheader
        charheader="charheader"
        charimg={shoto}
        imgClass="char-img"
        rowTheme="Wlayout-row-1 rowBlue"
        col1="col-1 greenTheme"
        col2="col-2 greentheme"
        charName="Shoto todoroki"
        heroName="Shoto"
        heroHeight="166cm"
        heroBodytype="Ectomorph"
        charDesc="If you dont have an entire beach to clean up near you then you can give these band workouts a try, These workouts are perfect for an ectomorph which is a typically smaller frame"
        pDescription="p-description blueText"
        headerTheme="hero-name blueText"
        heroDetails="hero-details blueText"
      />
      <Workoutguide
        container="workoutguide-cont-fluid"
        colclass="guide-col blue-border trigger1"
        colclass2="guide-col-2 blue-border"
        icons="icon"
        themecolor="guide-h1 blue-color"
        themecolorP="guide-p blue-color"
        structureh1="structure-h1 blue-color"
      />
      {/* 
      CHEST WORKOUT *******************************************************************
       */}
      <Workoutlayout
        workoutH1="Band push(Chest, legs, tricep) workouts"
        workoutHeader="workouth1 blue-color"
        row1="row-1 blue-border trigger2"
        svg={SVGS.chest}
        h1Color="workout-name blue-color"
        pClass="workout-desc blue-color"
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
        workouth1class="repeat-h1 blue-color"
        workoutTitle="Banded saw"
        workoutTitle2="Crossover pushups or Pushups"
        workoutTitle3="Wrap around press"
        workoutTitle4="Upper chest extension"
        workoutTitle5="Punch out extensions"
        workoutTitle6="workout 6"
        workoutDescription1="Starting with the saw, to perform this workout effectively youll want to anchor your band (to something sturdy) to chest height insert your hand locked into place and allow the elbow to drive through the chest into abduction"
        workoutDescription2="Now anchoring the band into a lowpoint and performing a standard pushup while holding the band in one hand crossing the banded hand across the unbanded hand will create the resistant abduction which increases the overal effect on your chest"
        workoutDescription3="For the third exercise youll want to anchor the band again to chest height and then p "
        workoutpclass="workout-desc-p"
        repeatH1="repeat-h1 blue-color"
      />
      {/* 
      Shoulder WORKOUT ***************************************************************
       */}
      <Workoutlayout
        row1="row-1 blue-border"
        svg={SVGS.shoulders}
        h1Color="workout-name blue-color"
        pClass="workout-desc blue-color"
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
        workouth1class="workout-name-h1 blue-color"
        workoutpclass="workout-desc-p"
        repeatH1="repeat-h1 blue-color"
      />

      {/* 
      TRICEP WORKOUT *****************************************************************
       */}
      <Workoutlayout
        row1="row-1 blue-border"
        svg={SVGS.triceps}
        h1Color="workout-name blue-color"
        pClass="workout-desc blue-color"
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
        workouth1class="workout-name-h1 blue-color"
        workoutpclass="workout-desc-p"
        repeatH1="repeat-h1 blue-color"
      />

      {/* Back workouts */}
      <Workoutlayout
        workoutH1="Band Pull(back, and biceps) workouts"
        workoutHeader="workouth1 blue-color"
        row1="row-1 blue-border"
        svg={SVGS.back}
        h1Color="workout-name blue-color"
        pClass="workout-desc blue-color"
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
        workouth1class="workout-name-h1 blue-color"
        workoutpclass="workout-desc-p"
        repeatH1="repeat-h1 blue-color"
      />
      {/* ARM WORKOUTS */}
      <Workoutlayout
        row1="row-1 blue-border"
        svg={SVGS.arms}
        h1Color="workout-name blue-color"
        pClass="workout-desc blue-color"
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
        workouth1class="workout-name-h1 blue-color"
        workoutpclass="workout-desc-p"
        repeatH1="repeat-h1 blue-color"
      />
      <Workoutlayout
        workoutH1="Leg/Cardio workouts"
        workoutHeader="workouth1 blue-color"
        row1="row-1 blue-border"
        svg={SVGS.legs}
        h1Color="workout-name blue-color"
        pClass="workout-desc blue-color"
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
        workouth1class="workout-name-h1 blue-color"
        workoutpclass="workout-desc-p"
        repeatH1="repeat-h1 blue-color"
      />
    </div>
  );
}

export default Shotoworkout1;
