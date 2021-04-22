import React, { Component } from 'react'
// Dependencies 
import { Link } from 'react-router-dom'
// CSS
import '../CSS/backbutton.css'

class Backbutton extends Component {
    render() {
        return (
            <div className='backbutton-cont'>
                <div className="backbtn">
                    <Link className='link-back' to={this.props.backroute}>Go Back</Link>
                </div>
            </div>
        )
    }
}

export default Backbutton
