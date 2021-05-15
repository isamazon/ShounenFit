import React, { useEffect } from "react";
// Components
import Workoutheader from "../workoutheroheader";
import Workoutlayout from "../../workoutlayout/workoutlayout";
import Scrolltop from "../../scrolltotop";
import Workoutguide from "../../workoutlayout/workoutguide";
// Dependancies
import { Container, Col, Row } from "react-bootstrap";
import AOS from "aos";
import LazyLoad from "react-lazy-load";
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
// All Gifs
import Gifs from "../../workoutimgs";
import { gsap, TimelineLite, Power3 } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Dekuworkout1() {
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
          color="rgb(13, 216, 114)"
        />
      </LazyLoad>
    ),
    back: (
      <LazyLoad height="100%" width="100%">
        <Back
          className="svg"
          height="100%"
          width="100%"
          color="rgb(13, 216, 114)"
        />
      </LazyLoad>
    ),
    arms: (
      <LazyLoad height="100%" width="100%">
        <Arms
          className="svg"
          height="100%"
          width="100%"
          color="rgb(13, 216, 114)"
        />
      </LazyLoad>
    ),
    abs: (
      <LazyLoad height="100%" width="100%">
        <Abs
          className="svg"
          height="100%"
          width="100%"
          color="rgb(13, 216, 114)"
        />
      </LazyLoad>
    ),
    legs: (
      <LazyLoad height="100%" width="100%">
        <Legs
          className="svg"
          height="100%"
          width="100%"
          color="rgb(13, 216, 114)"
        />
      </LazyLoad>
    ),
    triceps: (
      <LazyLoad height="100%" width="100%">
        <Triceps
          className="svg"
          height="100%"
          width="100%"
          color="rgb(13, 216, 114)"
        />
      </LazyLoad>
    ),
    shoulders: (
      <LazyLoad height="100%" width="100%">
        <Shoulders
          className="svg"
          height="100%"
          width="100%"
          color="rgb(13, 216, 114)"
        />
      </LazyLoad>
    ),
  };
  return (
    <div className="parent-container">
      <Scrolltop
        scrolltopclass="scroll-up-btn-ctn green-btn "
        scrolltophidden="scroll-up-btn-hidden"
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
        container="workoutguide-cont-fluid"
        colclass="guide-col green-border trigger1"
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
        row1="row-1 green-border trigger2"
        svg={SVGS.chest}
        h1Color="workout-name green-color"
        pClass="workout-desc green-color"
        // Workout descriptions
        workoutDesc1="This chest workout uses bands to target specific parts of the chest to increase overall mass with just the use of bands take 15-30 second breaks after each workout before going on to the next"
        // imgs
        bodypartworkout1="Chest workout"
        // Accordion workout props
        row="acc-row-1 "
        setH1="set-h1"
        workoutGif={Gifs.chestb1}
        workoutGif2={Gifs.chestb2}
        workoutGif3={Gifs.chestb3}
        workoutGif4={Gifs.chestb4}
        workoutGif5={Gifs.chestb5}
        workoutGif6={Gifs.chestb6}
        ownershipP="The following video is owned by athleanx.com"
        workouth1class="repeat-h1 green-color"
        workoutTitle="Banded saw"
        workoutTitle2="Crossover pushups or Pushups"
        workoutTitle3="Wrap around press"
        workoutTitle4="Upper chest pullover"
        workoutTitle5="Punch out extensions"
        workoutTitle6="Asissted or regular chest dips"
        workoutDescription1="Starting with the saw, to perform this workout effectively youll want to anchor your band (to something sturdy) to chest height insert your hand locked into place and allow the elbow to drive through the chest into abduction"
        workoutDescription2="Now anchoring the band into a lowpoint and performing a standard pushup while holding the band in one hand crossing the banded hand across the unbanded hand will create the resistant abduction which increases the overal effect on your chest. If you are unable to perform this exercise with the extra difficulty of using the band just perform pushups"
        workoutDescription3="For the third exercise youll want to anchor the band again to chest height and then perform a chest press but more importantly you want to allow your elbows to flare out, whats important about this is creating a wrap around/corner effect, which introduces some abduction stress to the exercise making the movement even more effective to the chest"
        workoutDescription4="For the fourth exercise we are goung to be targeting the upper chest area, by performing the upper chest pullover, like a traditional lat pullover with a dumbbell the band does this motion even better. By attaching the band to a lower anchor and pulling the band over your head WHILE PULLING your hands and interally roating them to get the best abduction squezze you can"
        workoutDescription5="With exercise number 6 were going to continue working that upperchest by performing the prone punchouts. To perform this exercise properly we need to anchor the band low to the floor. This is simulating the same kind of push that you would have from a incline dumbell press. As you press the arm out in front of us youre practically dragging your arm across the floor."
        workoutDescription6="The last exercise will be specifically hitting the lower chest with a assited or standard dips, if you DO NOT have a pull up bar or anywhere to perform the dips perform pushups for your finishing exercise"
        workoutpclass="workout-desc-p"
        repeatH1="repeat-h1 green-color"
        finishh1="finish-h1 green-color"
        abstoclass="abs-to-class"
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
        // Accordion workout props
        row="acc-row-1 "
        setH1="set-h1"
        workoutGif={Gifs.chestb1}
        workoutGif2={Gifs.chestb2}
        workoutGif3={Gifs.chestb3}
        workoutGif4={Gifs.chestb4}
        workoutGif5={Gifs.chestb5}
        workoutGif6={Gifs.chestb6}
        ownershipP="The following video is owned by athleanx.com"
        workoutTitle="Lying one arm press"
        workoutTitle2="Push press pull apart"
        workoutTitle3="Kneeling up and overs"
        workoutTitle4="Front raise pull aparts"
        workoutTitle5="Stretch front raise"
        workoutTitle6="Face pulls"
        workoutDescription1="The first band chest workout is a pushing action with a band blah blah blah band blah blah blah band blah blah blahband blah blah blah"
        workouth1class="workout-name-h1 green-color"
        workoutpclass="workout-desc-p"
        repeatH1="repeat-h1 green-color"
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
        // Accordion workout props
        row="acc-row-1 "
        setH1="set-h1"
        workoutGif={Gifs.chestb1}
        workoutGif2={Gifs.chestb2}
        workoutGif3={Gifs.chestb3}
        workoutGif4={Gifs.chestb4}
        workoutGif5={Gifs.chestb5}
        workoutGif6={Gifs.chestb6}
        ownershipP="The following video is owned by athleanx.com"
        workoutTitle="Shoulder workout 1"
        workoutTitle2="Crossover pushups or Pushups"
        workoutTitle3="Wrap around press"
        workoutTitle4="Upper chest extension"
        workoutTitle5="Punch out extensions"
        workoutTitle6="workout 6"
        workoutDescription1="The first band chest workout is a pushing action with a band blah blah blah band blah blah blah band blah blah blahband blah blah blah"
        workouth1class="workout-name-h1 green-color"
        workoutpclass="workout-desc-p"
        repeatH1="repeat-h1 green-color"
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
        // Accordion workout props
        row="acc-row-1 "
        setH1="set-h1"
        workoutGif={Gifs.chestb1}
        workoutGif2={Gifs.chestb2}
        workoutGif3={Gifs.chestb3}
        workoutGif4={Gifs.chestb4}
        workoutGif5={Gifs.chestb5}
        workoutGif6={Gifs.chestb6}
        ownershipP="The following video is owned by athleanx.com"
        workoutTitle="Shoulder workout 1"
        workoutTitle2="Crossover pushups or Pushups"
        workoutTitle3="Wrap around press"
        workoutTitle4="Upper chest extension"
        workoutTitle5="Punch out extensions"
        workoutTitle6="workout 6"
        workoutDescription1="The first band chest workout is a pushing action with a band blah blah blah band blah blah blah band blah blah blahband blah blah blah"
        workouth1class="workout-name-h1 green-color"
        workoutpclass="workout-desc-p"
        repeatH1="repeat-h1 green-color"
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
        // Accordion workout props
        row="acc-row-1 "
        setH1="set-h1"
        workoutGif={Gifs.chestb1}
        workoutGif2={Gifs.chestb2}
        workoutGif3={Gifs.chestb3}
        workoutGif4={Gifs.chestb4}
        workoutGif5={Gifs.chestb5}
        workoutGif6={Gifs.chestb6}
        ownershipP="The following video is owned by athleanx.com"
        workoutTitle="Shoulder workout 1"
        workoutTitle2="Crossover pushups or Pushups"
        workoutTitle3="Wrap around press"
        workoutTitle4="Upper chest extension"
        workoutTitle5="Punch out extensions"
        workoutTitle6="workout 6"
        workoutDescription1="The first band chest workout is a pushing action with a band blah blah blah band blah blah blah band blah blah blahband blah blah blah"
        workouth1class="workout-name-h1 green-color"
        workoutpclass="workout-desc-p"
        repeatH1="repeat-h1 green-color"
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
        // Accordion workout props
        row="acc-row-1 "
        setH1="set-h1"
        workoutGif={Gifs.chestb1}
        workoutGif2={Gifs.chestb2}
        workoutGif3={Gifs.chestb3}
        workoutGif4={Gifs.chestb4}
        workoutGif5={Gifs.chestb5}
        workoutGif6={Gifs.chestb6}
        ownershipP="The following video is owned by athleanx.com"
        workoutTitle="Shoulder workout 1"
        workoutTitle2="Crossover pushups or Pushups"
        workoutTitle3="Wrap around press"
        workoutTitle4="Upper chest extension"
        workoutTitle5="Punch out extensions"
        workoutTitle6="workout 6"
        workoutDescription1="The first band chest workout is a pushing action with a band blah blah blah band blah blah blah band blah blah blahband blah blah blah"
        workouth1class="workout-name-h1 green-color"
        workoutpclass="workout-desc-p"
        repeatH1="repeat-h1 green-color"
      />
    </div>
  );
}

export default Dekuworkout1;
