import React, { Component } from 'react'

// Components
import Nav from '../navbar'
// Dependancies
import { Container, Col, Row } from 'react-bootstrap'
// CSS
import '../../CSS/workouts/workout1.css'
// Pictures

class Workoutheader extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Container fluid className='Wlayout-m-container'>
                    <Container className='Wlayout-container'>
                        <Row className={this.props.rowTheme}>
                            {/* Character name and picture */}
                            <Col md={5} xs={12} className={this.props.col1}>
                                <img src={this.props.charimg} className={this.props.imgClass} alt=""/>
                            </Col>
                            {/* Character facts and description */}
                            <Col md={7} xs={12} className={this.props.col2}>
                                <h1 className={this.props.headerTheme}>Name: {this.props.charName}</h1>
                                <h2 className={this.props.heroDetails}>
                                    Hero name: {this.props.heroName}
                                </h2>
                                <h2 className={this.props.heroDetails}>
                                    Height: {this.props.heroHeight}
                                </h2>
                                <h2 className={this.props.heroDetails}>
                                    Body-type: {this.props.heroBodytype}
                                </h2>
                                <p className={this.props.pDescription}> {this.props.charDesc}</p>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                
            </div>
        )
    }
}

export default Workoutheader
