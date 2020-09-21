import React, { Component } from 'react'
import eHMIcar from '../../assets/eHMICar.png'
import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import './MasterThesis.css'
import userflow from '../../assets/userflow1.png'
import { ExternalLink } from 'react-external-link';
import hiker from '../../assets/hiker.png'
import cartopview from '../../assets/cartopview.png'
import questionnaire from '../../assets/questionnaire.png'

class MasterThesis extends Component {
    
    render() {
        return (
            <div>
                <NavigationBar/>
            <div className = "masterthesis">
                    <h2 style = {{textAlign : "center"}}>Master Thesis on Pedestrian Interaction with external-Human Machine Interface(eHMI) of Autonomous Vehicles </h2>
                    <img className = "mtimg" src = {eHMIcar} alt = '' width = "70%" height = "auto" />
                
                <div className = "mtInfo">
                    <div className = "lefttext">
                        <h3>
                            MY ROLE
                        </h3>
                        <p>
                            Principal Researcher
                        </p>
                        <br/>
                        <br/>
                        <h3>
                            SKILLS GAINED
                        </h3>
                        
                            <ul>
                                <li>UX Research</li>
                                <li>HMI design</li>
                                <li>Visual Design</li>
                                <li>User Interviews</li>
                                <li>Simulation Development</li>
                                <li>Data processing and analysis</li>
                            </ul>
                       

                    </div>

                    <div className = "righttext">
                        <h3 style = {{textDecoration : "none"}}>COLLABORATORS</h3>
                        <p>Dr. J.C.F. Joost De Winter, <span> Delft University of Technology, NL</span></p>
                        <p>ir. Yke Bauke Eisma, <span> Delft University of Technology, NL</span> </p>
                        <h3>Interact Road Automation Project :</h3>
                        <p>Prof. Natasha Merat, <span>University of Leeds, UK</span></p>
                        <p>Dr. Yee Mun Lee, <span>University of Leeds, UK</span></p>
                        <p>Jorge Garcia de Pedro, <span>University of Leeds, UK</span></p>
                        <p>Dr. Ruth Madigan, <span>Univerity of Leeds, UK</span></p>
                    </div>
                </div>
                <div className = "mtmaintext">
                    <h1>Workflow</h1>
                    <img className = "userflow" src = {userflow} alt = '' width = "100%" />
                    <h1>Problem</h1>
                    <p>
                        There are numerous eHMIs available for self driving cars both in production and in research. But the most crucial part 
                        in utilizing such eHMIs is the psychological behavior of the pedestrians towards the eHMI. So, we formulated a research 
                        question as to whether pedestrians misuse eHMI after repeated use? 
                    </p>

                    <h1>What we did?</h1>
                    <p>
                        I researched through various literature and the available eHMIs in the market. This research was my own idea which was greatly
                        appreciated and supported by the Professors of TU Delft, University of Leeds as well as the team of the Interact Road Automation project.
                        I along with a lab incharge (also part of team), designed and developed the eHMI design using Adobe Illustrator, Blender, and C#. The eHMI 
                        design was confirmed after a pilot study which included A/B and guerilla testing for minor changes in the eHMI design. I collaborated 
                        with the team in forming the experimental plan for the pilot and main user study and the user interviews (also included guerilla testing for further insights).
                        The main study was conducted in 
                        the <ExternalLink href = "https://uolds.leeds.ac.uk/facility/hikerlab/" >HIKER</ExternalLink> lab at the University of Leeds, UK.</p>
                        <h3 style = {{textAlign : "center"}}>The HIKER pedestrian lab</h3>
                        <img className = "mtimg" src = {hiker} alt = '' width = "70%" height = "auto" />
                        <h3 style = {{textAlign : "center"}}>Pre and post experiment user questionnaire </h3>
                        <img className = "mtimg" src = {questionnaire} alt = '' width = "70%" height = "auto" />
                        <h3 style = {{textAlign : "center"}}>A view of the AV in the simulation</h3>
                        <img className = "mtimg" src = {cartopview} alt = '' width = "70%" height = "auto" /> 
                        
                    

                    <h1>What did we find?</h1>
                    <p>
                        The eHMI, even though it was intuitive, was misused and many pedestrians in the virtual environment crashed with the Autonomous Vehicle(AV). After extensive pre and post
                        experiment questionnaires and user interviews, we got insights into how the experiment can be further developed and also an eHMI design to eliminate the 
                        misuse and further accidents.
                        Our interesting findings were compiled to be published in the Human Factors Journal. A copy of the pre-print is available on ResearchGate in the following link. <br/>
                        <br/>
                        <ExternalLink href="https://www.researchgate.net/publication/340923494_External_Human-Machine_Interfaces_can_be_Misleading_An_examination_of_trust_development_and_misuse_in_a_CAVE-based_pedestrian_simulation_environment">
                        Journal prerint
                        </ExternalLink>
                    </p>                    
                </div>
            </div>
            </div>
        );
    }
}

export default MasterThesis;