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
            <Row ClassName='row-1'>

            </Row>
        </Container>
    )
}

export default Landingpage2
