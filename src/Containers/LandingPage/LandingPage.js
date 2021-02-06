import React, { Component } from 'react'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import './LandingPage.css'
import mypic from '../../assets/IMG_20191030_170835.jpg'

class LandingPage extends Component {
    
    render() {

        let path = this.props.location.pathname;
        return (
            <div >
                <NavigationBar path = {path}/>
                    <div className = "containers">
                        <div className = "image_wrapper">
                            <img src = {mypic} alt = 'personal' width = '120%' height  = 'auto'/>
                        </div>
                        <div className = "text_wrapper">
                            <div className = "aboutme">
                                <p className = "hello" >Hello there!<br/>
                                <span className = "meet"> Meet </span><br/>
                                <span className = "anees">Anees Ahamed</span></p>
                                <p className = "info"> An aspiring junior designer who wants to start his career as a Human Factors Engineer or UX/UI or HMI designer or developer</p>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default LandingPage;