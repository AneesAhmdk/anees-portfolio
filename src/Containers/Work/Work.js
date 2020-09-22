import React, { Component, Fragment } from 'react'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import './Work.css'
import pedsim from '../../assets/pedsim.png' 
import website from '../../assets/website.png'
import { Link } from 'react-router-dom'
import arrowicon from '../../assets/arrowicon.png'

class Work extends Component {
    render() {
        return (
            <Fragment>
                <NavigationBar/>
            <div className = "work">

                    
                
                <div className = "workInfo">
                    <div className = "worklefttext">
                    <Link to = '/thesis'><img src = {pedsim} alt = 'pedsim' width = "100%" height = "auto" /></Link>
                    </div>

                    <div className = "workrighttext">
                        <div className = "ms1" >
                            <h2>Pedestrian Psychological Behavior when Interacting with an Autonomous Vehicle equipped with an external HMI </h2>
                            <Link to = '/thesis'> <img src = {arrowicon} alt = 'arrow icon' width = "13px" height = "auto"/> View</Link>
                        </div>
                    </div>
                </div>
                    
                <div className = "workInfo1">

                    <div className = "worklefttext1">
                    <div className = "ms2">
                            <h2>Design and Development of Responsive Pet Adoption Website</h2>
                            <Link to = '/website'> View <img src = {arrowicon} alt = 'arrow icon' width = "13px" height = "auto"/> </Link>
                        </div>
                    </div>
                    <div className = "workrighttext1">
                    <Link to = '/website'><img src = {website} alt = 'website' width = "100%" height = "auto" /></Link>
                    </div>
                </div>
            </div>
            </Fragment>
        );
    }
}

export default Work;