import React from 'react'

// Components
import Nav from '../../components/navbar'
// Dependancies
import { Container, Col, Row } from 'react-bootstrap'
// CSS
import '../../CSS/workouts/workout1.css'
// Pictures

function Workoutlayout(props) {
    return (
        <div>
            <Nav />
            <Container fluid className='Wlayout-m-container'>
                <Container className='Wlayout-container'>
                    <Row className={props.rowTheme}>
                        {/* Character name and picture */}
                        <Col md={5} xs={12} className={props.col1}>
                            <img src={props.charimg} className={props.imgClass} alt=""/>
                        </Col>
                        {/* Character facts and description */}
                        <Col md={7} xs={12} className={props.col2}>
                            <h1 className={props.headerTheme}>Name: {props.charName}</h1>
                            <h2 className={props.heroDetails}>
                                Hero name: {props.heroName}
                            </h2>
                            <h2 className={props.heroDetails}>
                                Height: {props.heroHeight}
                            </h2>
                            <h2 className={props.heroDetails}>
                                Body-type: {props.heroBodytype}
                            </h2>
                            <p className={props.pDescription}> {props.charDesc}</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Workoutlayout
