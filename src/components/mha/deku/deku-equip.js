import React from 'react'
// Components 
import Equipment from '../../../equipment'


function Dekuequip() {
    return (
        <div>
           <Equipment 
            // Styling
            h1color='greenH1'
            themeColor1='band-workouts Green'
            themeColor2='weight-workouts Green'
            themeColor3='body-workouts Green'    
            //Pathing
            bandpath='/dekubandworkout'
            weightpath='/'
            bodypath='/'/> 
        </div>
    )
}

export default Dekuequip
