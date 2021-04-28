import React, {Component} from 'react'
// CSS
import '../CSS/heropage.css'
import { Container, Col } from 'react-bootstrap'

class Func1 extends React.Component {
    
    constructor() {
        super();
        this.state = { text : 'ShounenFit' }
        
       
      }
    render() {
        const {text} = this.state
        return (
            <Container  className='landing-page'>
                <Col xl={12} className='header-col'>
                    <div
                    className='welcome-header'>
                        {text}
                    </div>
                </Col>
                <Col xl={12} 
                className='second-header'>
                    <div className="header-2">
                        <h3 className='header3'>
                        Like you, every shounen has a      
                        </h3>
                    </div>
                </Col>
            </Container>
        )
    }
}

export default Func1