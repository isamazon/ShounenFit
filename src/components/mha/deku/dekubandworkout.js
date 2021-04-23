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
            workoutH1='Deku band workout'
            workoutHeader='workouth1 green-color'
            row1='row-1 green-border' 
            // Columns
            col1='col-1'
            col2='col-2'
            col3='col-3'
            // imgs
            bpimgclass='bodypart-img'
            svgColor='rgb(0, 255, 200)'
            width='100%'
            height='100%'
            />
        </div>
    )
}

export default Dekuworkout1
