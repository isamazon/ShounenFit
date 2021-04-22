import React from 'react'
// Components 
import Equipment from '../../../equipment'


function Shotoequip() {
    return (
        <div>
           <Equipment 
            // Styling
            h1color='Lblueh1'
            themeColor1='band-workouts Lblue'
            themeColor2='weight-workouts Lblue'
            themeColor3='body-workouts Lblue'    
            //Pathing
            bandpath='/maleshounen'
            weightpath='/femaleshounen'
            bodypath='/femaleshounen'/> 
        </div>
    )
}

export default Shotoequip 