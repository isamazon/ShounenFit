import { Component } from "react"
// CSS 
import '../CSS/backbutton.css'
// Icons
import { FaArrowCircleUp } from 'react-icons/fa'

class Scrolltop extends Component {
    render () {
        return (
            <div className={this.props.scrolltopclass}>
                <FaArrowCircleUp size='50px' className={this.props.arrowup}/>
            </div>
        )
    }
}

export default Scrolltop
