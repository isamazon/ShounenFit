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
// Assets 
import Chest from '../../bodyparts/chest'
import Arms from '../../bodyparts/chest'
import Back from '../../bodyparts/chest'
import Abs from '../../bodyparts/chest'
import Legs from '../../bodyparts/legs'


function Dekuworkout1() {
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
            svgColor='rgb(0, 255, 200)'
            h1Color='workout-name green-color'
            pClass='workout-desc green-color'
            // Workout descriptions
            workoutDesc1='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, corporis! Eaque corporis perspiciatis doloremque totam laudantium '
            // Columns
            col1='col-1'
            col2='col-2'
            col3='col-3'
            // imgs
            bodypartworkout1='Chest workout'
            
            />
        </div>
    )
}

export default Dekuworkout1
