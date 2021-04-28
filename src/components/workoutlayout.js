import React, { Component, useEffect } from 'react'
// Dependancies
import { Container, Row, Col, Accordion } from 'react-bootstrap'
import AOS from 'aos'
// CSS
import '../CSS/workouts/workoutlayout.css'
// Assets 
// import Chest from '../components/bodyparts/chest'
// import Arms from '../components/bodyparts/arms'
// import Back from '../components/bodyparts/back'
// import Abs from './bodyparts/abdominals'
// import Legs from './bodyparts/legs'
// // Female BP
// import Fabs from './bodyparts/Fabs'
// import Farms from './bodyparts/Farms'
// import Fglutes from './bodyparts/Fglutes'
// import Fchest from './bodyparts/Fchest'
// import Fback from './bodyparts/Fback'
// components 
import Workoutaccord from './workoutaccordion'

function Workoutlayout(props) {


        useEffect(() => {
            AOS.init();
            AOS.refresh();
        }, []);
        
        return (
            <div className='main-container'>
                <Container fluid className='cont-fluid'>

                    <Container className='cont-inner-main'>
                        <h1
                            data-aos='fade-up'
                            data-aos-duration='1500'
                            className={props.workoutHeader}>
                                {props.workoutH1} 
                        </h1>
                        {/* Workout 1 */}
                        <Row className={props.row1} data-aos='flip-up'
                        data-aos-duration='1500'>
                            {/* Workout picture */}
                            <Col md={5} xs={12} className='col-1'>
                                {props.svg}
                            </Col>
                            {/* Workout desc */}
                            <Col md={7} xs={12}
                            className='col-2'>
                                <h1 className={props.h1Color}> {props.bodypartworkout1} 
                                </h1>
                                <p className={props.pClass}>
                                    {props.workoutDesc1}
                                </p>
                            </Col>
                            {/* Accordion Column */}
                            <Col md={12} xs={12}
                            className='col-3'>
                                <Workoutaccord
                                
                                />
                            </Col>
                        </Row>                      
                    </Container>
                </Container>
            </div>
        )
    
}

export default Workoutlayout
