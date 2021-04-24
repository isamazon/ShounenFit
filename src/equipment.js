import React, { Component } from 'react'
// Components
import Nav from './components/navbar'
import { Container, Row, Col } from 'react-bootstrap'
// CSS and assets
import './CSS/equipment.css'
import Bands from './components/equipmentsvgs/bands'
import Weights from './components/equipmentsvgs/weights'
import Body from './components/equipmentsvgs/bodyweight'
// Dependancies
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class Equipment extends Component {
   render() {
    return (
        <div>
            
            <Container fluid className='Eq-m-cont'>
                <Container className='Eq-cont'>
                    <Row className='row-1'>
                        <h1 className={this.props.h1color}>Choose your equipment</h1>
                        <Col md={4} xs={12} className='Eq-col'>
                            <Link 
                            to={this.props.bandpath}
                            className={this.props.themeColor1}>
                                <h1 className={this.props.h1Class} >Bands</h1>
                                <Bands className={this.props.bandSVG} height='100%' width='100%' color={this.props.SVGcolor}/>
                            </Link>
                        </Col>
                        <Col md={4} xs={12} className='Eq-col-2'>
                            <Link>
                                <Link 
                                to={this.props.weightpath}
                                className={this.props.themeColor2}>
                                    <h1 className={this.props.h1Class} >Weights</h1>
                                    <Weights className={this.props.bandSVG} height='100%' width='100%' color={this.props.SVGcolor} />
                                </Link>
                            </Link>
                        </Col>
                        <Col md={4} xs={12} className='Eq-col-3'>
                            
                            <Link
                            to={this.props.bodypath}
                            className={this.props.themeColor3}>
                                    <h1 className={this.props.h1Class} >Body weight</h1>
                                    <Body className={this.props.bandSVG} height='100%' width='100%' color={this.props.SVGcolor}/>
                            </Link>
                            
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
   }
}

export default Equipment
