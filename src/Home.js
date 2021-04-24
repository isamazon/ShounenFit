import React from 'react'
// Components
import Heropage from './components/heropage'
import Nav from './components/navbar'
import Landingpage2 from './components/landingpage2/landingpage2'

function Home() {

    
    return (
        <div className='home-container'>
            
            <Heropage />
            <Landingpage2/>
        </div>
    )
}

export default Home
