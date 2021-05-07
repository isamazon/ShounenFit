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
                <Col md={5} xs={12} className={this.props.colclass}>
                    <FaQuestionCircle className={this.props.icons} size = '100px'/>
                    <h1 className={this.props.themecolor}>
                        Dont know where to start?
                    </h1>
                    <p className={this.props.themecolor}>
                        The hardest thing about starting to workout is knowing where to start and how to structure your workouts. 
                        This guide is a basic structure on how and what you should add to your workouts and what body parts should be worked out together in larger workout sessions 
                    </p>
                </Col>
                <Col md={7} xs={12} className={this.props.colclass2}>
                    <h1 className={this.props.structureh1}>
                        Structuring your workouts
                    </h1>
                    <h2 className={this.props.themecolor}>
                        Push days:
                    </h2>
                    <p>Push days consist of Chest, triceps and shoulders usually you want to either incorporate all 3 body parts in one workout or workout a mixture of chest and triceps or chest and shoulders.</p>
                    <h2 className={this.props.themecolor}>
                        Pull days:
                    </h2>
                    <p>Push days consist of Chest, triceps and shoulders usually you want to either incorporate all 3 body parts in one workout or workout a mixture of chest and triceps or chest and shoulders.</p>
                    <h2 className={this.props.themecolor}>
                        Leg days:
                    </h2>
                    <p>Push days consist of Chest, triceps and shoulders usually you want to either incorporate all 3 body parts in one workout or workout a mixture of chest and triceps or chest and shoulders.</p>
                    <h2 className={this.props.themecolor}>
                        Cardio days:
                    </h2>
                    <p>Push days consist of Chest, triceps and shoulders usually you want to either incorporate all 3 body parts in one workout or workout a mixture of chest and triceps or chest and shoulders.</p>
                </Col>
                </Container>
            </Container>
        )

    }
}

export default Workoutguide
