import React, { Component, useEffect } from 'react'
// Dependancies
import { Container, Row, Col, Accordion } from 'react-bootstrap'
import AOS from 'aos'
// CSS
import '../CSS/workouts/workoutlayout.css'
// Assets 
import Chest from '../components/bodyparts/chest'
import Abs from '../components/bodyparts/abs'

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
                                <Chest svgColor={props.svgColor} width={props.width} height={props.height} />
                            </Col>
                            <Col md={7} xs={12}
                            className={props.col2}>
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
