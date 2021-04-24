import React, { Component, useEffect } from 'react'
// Dependancies
import { Container, Row, Col, Accordion } from 'react-bootstrap'
import AOS from 'aos'
// CSS
import '../CSS/workouts/workoutlayout.css'
// Assets 
import Chest from '../components/bodyparts/chest'
import Arms from '../components/bodyparts/arms'
import Back from '../components/bodyparts/back'
import Abs from './bodyparts/abdominals'
import Legs from './bodyparts/legs'
// Female BP
import Fabs from './bodyparts/Fabs'
import Farms from './bodyparts/Farms'
import Fglutes from './bodyparts/Fglutes'
import Fchest from './bodyparts/Fchest'
import Fback from './bodyparts/Fback'
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
                    <h1 className={props.workoutHeader}>
                        {props.workoutH1} 
                    </h1>
                    <Container className='cont-inner-main'>
                        {/* Workout 1 */}
                        <Row className={props.row1} data-aos='flip-up'
                        data-aos-duration='1000'>
                            <Col md={5} xs={12} className={props.col1}>
                            <Chest height='100%' width='100%' color='rgb(0, 255, 200)'/>
                            </Col>
                            <Col md={7} xs={12}
                            className={props.col2}>
                                <h1> {props.bodypartworkout} </h1>
                            </Col>
                            <Col md={12} xs={12}
                            className={props.col3}>
                                
                            </Col>
                        </Row>

                    </Container>
                </Container>
            </div>
        )
    
}

export default Workoutlayout