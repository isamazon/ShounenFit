import React, { Component, useEffect, useState } from 'react'
// CSS
import  '../../CSS/landingpage2/landingpage2.css'
// Dependancies
import { Container, Col, Row} from 'react-bootstrap'
// Components
import Heroslide from '../landingpage2/heroslide'
// Character imgs
import deku from '../../assets/dekupng.png'
import video1 from '../../assets/circlevid.mp4'


class Landingpage2 extends Component {
    render() {
        return (
            <Container fluid className='page-2-fluid'>
                <Row className='row-1'>
                    <Col md={7} xs={12} className='col-2'>
                    <div className='char-slider'>
                            {/* video goes here */}
                            <video className='video1'
                            src={video1}
                            type="video/mp4"
                            autoPlay
                            loop></video>
                            <img className='char-img' src={deku} alt=""/>
                        </div>
                        
                    </Col>
                    <Col md={5} xs={12} className='col-1'>
                    <h1>Why shounen fit?</h1>
                    <p>Almost every anime fan cant help to be inspired by every shounen protagonist that faces obstacles and overcomes them. Using anime as the cornerstone of this project is to inspire all anime fans to reach their goals and become the best shoune the can become</p>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default Landingpage2
