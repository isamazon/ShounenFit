import React, { useEffect } from 'react'
// Components
import Workoutheader from '../workoutheroheader'
import Workoutlayout from '../../workoutlayout'
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
import Arms from '../../bodyparts/chest'
import Back from '../../bodyparts/back'
import Abs from '../../bodyparts/chest'
import Legs from '../../bodyparts/legs'


function Dekuworkout1() {
    const chestSVG = <Chest height='100%' width='100%' color='rgb(0, 255, 200)' />
    const backSVG = <Back height='100%' width='100%' color='rgb(0, 255, 200)' />
    return (

        <div>
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


            <Workoutlayout
            workoutH1='Deku band workouts'
            workoutHeader='workouth1 green-color'
            row1='row-1 green-border' 
            svg={chestSVG}
            h1Color='workout-name green-color'
            pClass='workout-desc green-color'
            // Workout descriptions
            workoutDesc1='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, corporis! Eaque corporis perspiciatis doloremque totam laudantium '
            // imgs
            bodypartworkout1='Chest workout'
            />
            <Workoutlayout
            row1='row-1 green-border' 
            svg={backSVG}
            h1Color='workout-name green-color'
            pClass='workout-desc green-color'
            // Workout descriptions
            workoutDesc1='Back workouts are essential to '
            // imgs
            bodypartworkout1='Back workout'
            />
        </div>
    )
}

export default Dekuworkout1
