import React from 'react'
// Components 
import Equipment from '../../../equipment'


function Allmightequip() {
    return (
        <div>
           <Equipment 
            // Styling
            h1color='yellowh1'
            themeColor1='band-workouts Yellow'
            themeColor2='weight-workouts Yellow'
            themeColor3='body-workouts Yellow'    
            //Pathing
            bandpath='/maleshounen'
            weightpath='/femaleshounen'
            bodypath='/femaleshounen'/> 
        </div>
    )
}

export default Allmightequip
