import React, { Component, Fragment } from 'react'
import webpage1 from '../../assets/webpage1.png'
import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import './Website.css'
import adminpage from '../../assets/adminpage.png'
import clientpage from '../../assets/clientpage1.png'
import mobileview from '../../assets/mobilepage.png'
import { ExternalLink } from 'react-external-link';


class Website extends Component {
    
    render() {
        return (
            <Fragment>
                <NavigationBar/>
            <div className = "website">
                    <h2 style = {{textAlign : "center"}}>Design and Development of Responsive Pet Adoption Website </h2>
                    <img className = "webimg" src = {webpage1} alt = 'webpage' width = "90%" height = "auto" />
                
                <div className = "wbInfo">
                    <div className = "wblefttext">
                        <h3>
                            My Role
                        </h3>
                        <p>
                            Freelancer
                        </p>
                        
                    </div>

                    <div className = "wbrighttext">
                        <h3>
                            Skills Acquired
                        </h3>
                    
                            <ul>
                                <li>UX/UI Design (Brainstorming and Rough Sketch)</li>
                                <li>Web / Visual design (Adobe XD) </li>
                                <li>Frontend development {'<'}React{'/>'}</li>
                                <li>Backend development (NodeJS, Express, MongoDB)</li>
                            </ul>
                        
                    </div>
                </div>
                
                <div className = "wbmaintext">
                    <h1>Problem</h1>
                    <p>My city (Chennai) doesn't have a dedicated website for pet adoption.</p>
                    <h1>What I did?</h1>
                    <p>
                        I approached a famous pet adoption center through Facebook and had a brief talk regarding the design and development 
                        of a website for them to post details of pets so that it gets easier for the people of my city to apply for 
                        for adoption. I used Adobe XD for creating the UI with UX integrated for easy use of the app. I developed the application
                        using the React framework.
                    </p>
                    <h1>Features</h1>
                    <p>The website was designed and developed solely by myself. There is an admin page to create, edit, and delete pet details. The client 
                        page displays the pets with a very intuitive and responsive web experience. There is also an integrated donations page which allows people
                        to donate for vet bills and shelter development.   
                    </p>
                    <h3 style = {{textAlign : "center"}}>Admin console</h3>
                    <img src = {adminpage} alt = 'admin page'/>
                    <h3 style = {{textAlign : "center"}}>Client site- Desktop View</h3>
                    <img src = {clientpage} alt = 'client page'/>
                    <h3 style = {{textAlign : "center"}}>Client site- Mobile View</h3>
                    <img src = {mobileview} alt = 'client page - mobile'/>
                    <h3>Status</h3>
                    <i>The website is live on <ExternalLink href="http://adhvikafoundation.org">
                        adhvikafoundation.org
                        </ExternalLink> but the details of the pets are yet to be updated in the database.</i>
                
                </div>
            </div>
            </Fragment>
        );
    }
}

export default Website;