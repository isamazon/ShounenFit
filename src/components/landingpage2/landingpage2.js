import React, { useEffect } from 'react'
// CSS
import  '../../CSS/landingpage2/landingpage2.css'
import '../../../node_modules/aos/dist/aos.css'
// Dependancies
import { Container, Col, Row} from 'react-bootstrap'
// Components
import AOS from 'aos'
import Heroslide from '../landingpage2/heroslide'


function Landingpage2() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <Container fluid className='page-2-fluid'>
            <Container className='page-2-container'>
                <Row className='row-1'>
                    <Col xl={6} sm={12} className='col-1'>
                        <Heroslide />
                        <h1 data-aos='fade-down'
                        
                        data-aos-duration='1500'
                        >How does it work?</h1>
                        <p data-aos="fade-down"
                        
                        data-aos-duration='1500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis recusandae tempora laboriosam officiis aliquam dolores debitis fugit est totam natus odit quo saepe, facilis minima at dolor, dolorum, veritatis illo!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sint in neque maiores architecto veniam, totam optio dolor dolore rerum, perspiciatis commodi, hic sequi quam recusandae enim fugit. Sit, inventore.
                        </p>
                    </Col>
                    <Col xl={6} sm={12} className='col-2'>
                        <h1 data-aos='fade-up'
                        data-aos-delay='500'
                        data-aos-duration='1000'>Why Shounen fit?</h1>
                        <p data-aos='fade-down'
                        data-aos-delay='800'
                        data-aos-duration='1500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis placeat ex quo eligendi eius ullam. Quo aliquid quaerat, temporibus quia saepe deleniti distinctio obcaecati ullam perspiciatis, suscipit est incidunt unde.</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Landingpage2
