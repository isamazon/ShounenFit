import React, { Component } from 'react'
// Dependancies
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap'
// CSS
import '../CSS/workouts/workoutlayout.css'
// Assets 


class Workoutaccord extends Component {
    render() {
        return (
                <Accordion defaultActiveKey="0">
                    <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Click me!
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                    </Card>
                </Accordion>
        )
    }
}

export default Workoutaccord
