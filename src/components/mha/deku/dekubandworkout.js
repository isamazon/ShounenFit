import React, { useEffect } from 'react'
// Components
import Workoutheader from '../workoutheroheader'
import Workoutlayout from '../../workoutlayout'
import Scrolltop from '../../scrolltotop'
// Dependancies
import { Container, Col, Row } from 'react-bootstrap'
import AOS from 'aos'
// CSS
import '../../../CSS/workouts/workout1.css'
// assets
import deku from '../../../assets/deku.png'
import Chestpng from '../../../assets/bodyparts/chestsvg.svg'
// Assets 
import Chest from '../../bodyparts/chest'
import Arms from '../../bodyparts/arms'
import Back from '../../bodyparts/back'
import Abs from '../../bodyparts/chest'
import Legs from '../../bodyparts/legs'
import Triceps from '../../bodyparts/triceps'
import Shoulders from '../../bodyparts/shouders'
import Workoutguide from '../../workoutguide'

function Dekuworkout1() {
    

    const SVGS = {
        chest: <Chest height='100%' width='100%' color='rgb(13, 216, 114)' />, 
        back:  <Back height='100%' width='100%' color='rgb(13, 216, 114)' />,
        arms: <Arms height='100%' width='100%' color='rgb(13, 216, 114)' />,
        abs: <Abs height='100%' width='100%' color='rgb(13, 216, 114)' />, 
        legs: <Legs height='100%' width='100%' color='rgb(13, 216, 114)' />,
        triceps: <Triceps height='100%' width='100%' color='rgb(13, 216, 114)' />,
        shoulders: <Shoulders height='100%' width='100%' color='rgb(13, 216, 114)' />
    }
    return (

        <div>
            <Scrolltop scrolltopclass='scroll-up-btn-ctn green-btn' arrowup='arrow-up' />
           <Workoutheader 
           charimg={deku}
           imgClass='char-img'
           rowTheme='Wlayout-row-1 rowGreen' 
           col1='col-1 greenTheme' 
           col2='col-2 greentheme'
           charName='Izuku Midorya'
           heroName='Deku'
           heroHeight='166cm'
           heroBodytype='Ectomorph'
           charDesc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo porro omnis harum quod, culpa sint recusandae neque minima delectus, esse vitae totam labore a ducimus doloremque ipsa! Expedita, consectetur nulla.'
           pDescription='p-description greenText'
           headerTheme='hero-name greenText'
           heroDetails='hero-details greenText'
           /> 
           <Workoutguide 
           colclass='guide-col green-border'
           colclass2='guide-col-2 green-border'
           icons='icon'
           themecolor='guide-h1 green-color' />
            {/* CHEST WORKOUT */}
            <Workoutlayout
            workoutH1='Band push(Chest, legs, tricep) workouts'
            workoutHeader='workouth1 green-color'
            row1='row-1 green-border' 
            svg={SVGS.chest}
            h1Color='workout-name green-color'
            pClass='workout-desc green-color'
            // Workout descriptions
            workoutDesc1='Lorem ipsum dolor sit amet consectetur adipisicing elit.  '
            // imgs
            bodypartworkout1='Chest workout'
            />
            {/* Shoulder WORKOUT */}
            <Workoutlayout
            row1='row-1 green-border' 
            svg={SVGS.shoulders}
            h1Color='workout-name green-color'
            pClass='workout-desc green-color'
            // Workout descriptions
            workoutDesc1='Lorem ipsum dolor sit amet consectetur adipisicing elit.  '
            // imgs
            bodypartworkout1='Shoulder workout'
            />
            
            {/* TRICEP WORKOUT */}
            <Workoutlayout
            row1='row-1 green-border' 
            svg={SVGS.triceps}
            h1Color='workout-name green-color'
            pClass='workout-desc green-color'
            // Workout descriptions
            workoutDesc1='Your triceps make up more than two-thirds of your upper-arm mass. Building thick, developed triceps means building thick, developed arms. And with bands its possible to build that muscle'
            // imgs
            bodypartworkout1='Tricep workout'
            />


            {/* Back workouts */}
            <Workoutlayout
            workoutH1='Band Pull(back, and biceps) workouts'
            workoutHeader='workouth1 green-color'
            row1='row-1 green-border' 
            svg={SVGS.back}
            h1Color='workout-name green-color'
            pClass='workout-desc green-color'
            // Workout descriptions
            workoutDesc1='Back workouts are essential to '
            // imgs
            bodypartworkout1='Back workout'
            // Accordion workout
            />
            {/* ARM WORKOUTS */}
            <Workoutlayout
            row1='row-1 green-border' 
            svg={SVGS.arms}
            h1Color='workout-name green-color'
            pClass='workout-desc green-color'
            // Workout descriptions
            workoutDesc1='Back workouts are essential to '
            // imgs
            bodypartworkout1='Bicep workout'
            // Accordion workout
            />
            <Workoutlayout
            workoutH1='Leg/Cardio workouts'
            workoutHeader='workouth1 green-color'
            row1='row-1 green-border' 
            svg={SVGS.legs}
            h1Color='workout-name green-color'
            pClass='workout-desc green-color'
            // Workout descriptions
            workoutDesc1='Lorem ipsum dolor sit amet consectetur adipisicing elit.  '
            // imgs
            bodypartworkout1='Leg workout'
            />
        </div>
    )
}

export default Dekuworkout1

// const chestSVG = <Chest height='100%' width='100%' color='rgb(13, 216, 114)' />
//     const backSVG = <Back height='100%' width='100%' color='rgb(13, 216, 114)' />
//     const armsSvg = <Arms height='100%' width='100%' color='rgb(13, 216, 114)' />
//     const AbsSVG = <Abs height='100%' width='100%' color='rgb(13, 216, 114)' />
//     const LegsSVG = <Legs height='100%' width='100%' color='rgb(13, 216, 114)' />
