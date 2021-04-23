import React, { Component, useEffect, useState } from 'react'
// Components
import Nav from './components/navbar'
import Selection from './components/animeselection'
import Videoheader from './components/videoheader'
// Dependencies
import AOS from 'aos'
import { Container } from 'react-bootstrap'
// CSS/assets
import './CSS/male/MHAM.css'
import video1 from './assets/maleshounenmp4.mp4'





function Maleshounen() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (

        
        <div>
            <Nav />
            
            <Videoheader gender='male' video={video1} />
            <Container fluid className='anime-selection-cont'>
                <Selection />
            </Container>
        </div>
    )
}

export default Maleshounen

