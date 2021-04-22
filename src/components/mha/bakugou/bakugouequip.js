import React from 'react'
// Components 
import Equipment from '../../../equipment'


function Bakugouequip() {
    return (
        <div>
           <Equipment 
            // Styling
            h1color='orangeh1'
            themeColor1='band-workouts orangeTheme'
            themeColor2='weight-workouts orangeTheme'
            themeColor3='body-workouts orangeTheme'    
            //Pathing
            bandpath='/maleshounen'
            weightpath='/femaleshounen'
            bodypath='/femaleshounen'/> 
        </div>
    )
}

export default Bakugouequip