import React from 'react'
// Components
import Workoutlayout from '../workoutlayout'
// Dependancies
import { Container, Col, Row } from 'react-bootstrap'
// CSS
import '../../../CSS/workouts/workout1.css'
// assets
import deku from '../../../assets/deku.png'

function Dekuworkout1() {
    return (
        <div>
           <Workoutlayout 
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
        
        </div>
    )
}

export default Dekuworkout1
