import React, { Component } from 'react'
// Dependencies'
// CSS/assets
import '../CSS/male/maleshounen.css'

class Videoheader extends Component {
    render() {
        return (
            <div>
                <div className='main-container'>
                    <div className="blurred-video">
                        <video className='video1' autoPlay loop muted>
                            <source src={this.props.video} type='video/mp4'/>
                        </video>
                    </div>
                    <div className="clear-video">
                        <h1> Welcome {this.props.gender} shounen</h1>
                        <video className='video1' autoPlay loop muted>
                            <source src={this.props.video} type='video/mp4'/>
                        </video>
                    </div>
                    <h1
                    className='choose-h1'>Choose Your anime</h1>
                </div>
            </div>
        )
    }
}

export default Videoheader
