import React,{ Component } from 'react'
// Dependencies
import { Container, Col } from 'react-bootstrap'
import { FaQuestionCircle } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'

class Workoutguide extends Component {
    render() {
        return (
            <Container fluid className='workoutguide-cont-fluid'>
                <Container className='workout-guide-cont'>
                <FaTimes />
                <Col md={5} sm={12} className={this.props.colclass}>
                    <FaQuestionCircle className={this.props.icons} size = '100px'/>
                    <h1 className={this.props.themecolor}>
                        Dont know where to start?
                    </h1>
                    <p className={this.props.themecolor}>
                        The hardest thing about starting to workout is knowing where to start and how to structure your workouts. 
                        This guide is a basic structure on how and what you should add to your workouts and what body parts should be worked out together in larger workout sessions 
                    </p>
                </Col>
                <Col md={7} sm={12} className={this.props.colclass2}>

                </Col>
                </Container>
            </Container>
        )

    }
}

export default Workoutguide
