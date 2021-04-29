import React, { Component, useEffect, useState } from 'react'
// CSS
import  '../../CSS/landingpage2/landingpage2.css';
// Dependancies
import { Container, Col, Row} from 'react-bootstrap';
import { Slider } from 'react-slick';
// Components
import Heroslide from '../landingpage2/heroslide'
// Character imgs
import deku from '../../assets/icon/dekupng.png'
import mikasa from '../../assets/icon/mikasa.png'
import zenitsu from '../../assets/icon/zenitsu.png'
import eren from '../../assets/icon/eren.png'
import gojou from '../../assets/icon/gojoupng.png'
import bakugou from '../../assets/icon/bakugou.png'
import nezuko from '../../assets/icon/nezuko.png'
// Videos
import video1 from '../../assets/circlevid.mp4'
import purplevideo from '../../assets/icon/purpleblackcirclevid.mp4'
import greenvideo from '../../assets/icon/greencirclevid.mp4'
import redvideo from '../../assets/icon/redcirclevid.mp4'
import goldvideo from '../../assets/icon/goldcirclevid.mp4'
import orangevideo from '../../assets/icon/orangecirclevid.mp4'
import bluevideo from '../../assets/icon/blueblackcirclevid.mp4'
import pinkvideo from '../../assets/icon/pinkcirclevid.mp4'
// Borders
import Wborder from '../../assets/icon/whitecircleframe.png'
import Bborder from '../../assets/icon/blackcircleframe.png'
// Charcter 
import Dekusvg from '../../components/icons/deku'
import Zenitsusvg from '../../components/icons/zenitsu'
import Mikasasvg from '../../components/icons/mikasa'
import Erensvg from '../../components/icons/eren'
import Allmightsvg from '../../components/icons/allmight'
import Bakugousvg from '../../components/icons/bakugou'
import Nezukosvg from '../../components/icons/nezuko'
import Gojousvg from '../../components/icons/gojou'




class Landingpage2 extends React.Component {

    constructor() {
        super();
        this.state = {
            video: greenvideo,
            charimg: deku
        }
    }

    render() {

        return (
            <Container fluid className='page-2-fluid'>
                <Row className='row-1'>
                    <Col md={7} xs={12} className='col-2'>
                    <div className='char-slider'>
                            {/* video goes here */}
                            <video className='video1'
                            src={this.state.video}
                            type="video/mp4"
                            autoPlay
                            loop></video>
                            <img src={Bborder} className='border-img' alt=""/>
                            <img className='char-img' src={this.state.charimg} alt=""/>
                        </div>
                        
                    </Col>
                    <Col md={5} xs={12} className='col-1'>
                    <h1>Why shounen fit?</h1>
                    <p>Almost every anime fan cant help to be inspired by every shounen protagonist that faces obstacles and overcomes them. Using anime as the cornerstone of this project is to inspire all anime fans to reach their goals and become the best shoune the can become</p>
                    <div className="svg-btn-ctn">
                        <Dekusvg
                        onClick = {() => this.setState({video:greenvideo, charimg: deku})}
                         className='dekusvg'
                         fill='#fff' 
                         height='50px' />
                        <Zenitsusvg
                        onClick = {() => this.setState({video:goldvideo, charimg: zenitsu})}
                        className='zenitsusvg'
                        fill='#fff'
                        height='50px' />
                        <Mikasasvg
                        onClick = {() => this.setState({video:redvideo, charimg: mikasa})}
                        className='mikasasvg'
                        fill='#fff'
                        height='50px' />
                        <Allmightsvg
                        className='allmightsvg'
                        fill='#fff'
                        height='50px' />
                        <Erensvg
                        onClick = {() => this.setState({video:bluevideo, charimg: eren})}
                        className='erensvg'
                        fill='#fff'
                        height='50px' />
                        <Bakugousvg
                        onClick = {() => this.setState({video:orangevideo, charimg: bakugou})}
                        className='bakugousvg'
                        fill='#fff'
                        height='50px' />
                        <Gojousvg
                        onClick = {() => this.setState({video:purplevideo, charimg: gojou})}
                        className='gojousvg'
                        fill='#fff'
                        height='50px' />
                        
                    </div>
                    </Col>

                </Row>
            </Container>

        )
    }
}

export default Landingpage2
