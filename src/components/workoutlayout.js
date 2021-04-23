import React, { Component } from 'react'
// Dependancies
import { Container, Row, Col } from 'react-bootstrap'
// CSS
import '../CSS/workouts/workoutlayout.css'

class Workoutlayout extends Component {
    render() {
        return (
            <div className='main-container'>
                <Container fluid className='cont-fluid'>
                    <h1 className={this.props.workoutHeader}>
                        {this.props.workoutH1} 
                    </h1>
                    <Container className='cont-inner-main'>
                        <Row className={this.props.row1}>
                            
                        </Row>
                    </Container>
                </Container>
            </div>
        )
    }
}

export default Workoutlayout
