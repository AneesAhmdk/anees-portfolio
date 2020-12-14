import React, { Component } from 'react'
import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import './About.css'
import bajacar from '../../assets/bajacar.jpg'
import group from '../../assets/bajagroup.jpg'
import { Link } from 'react-router-dom';

class About extends Component {
    
    render() {
        return (
            <div className = "about">
                <NavigationBar/>
                <div className = "aboutcontainer">
                <h1 style = {{textAlign : "center"}}>
                    My Journey : Soiled hands to 'numb' fingers!<br/> 
                </h1>
                <div> 
                    

                    <h2>My love for Mechanical and Psychology and how I brought them together</h2> 
                       

                    <p>I hold a Mechanical degree both in Bachelors and Masters. I had a passion to do 
                    creative art since childhood and eventually took up courses in Adobe Photoshop and CorelDraw when 
                    I was in 6th grade. People were astonished to see me learning at such a young age. I learnt many things which 
                    I still enjoy doing today.<br/>
                    My Bachelors was purely Mechanical where I could either design and analyse 3D mechanical components or design and manufacture 
                    a mini buggy from scratch (as a team). We all enjoyed because of our love of getting our hands soiled and obviously the fact that they are CARS. </p>
                    <div className="img-container">
                        <p style = {{fontSize : "1.1rem", fontFamily : "sans-serif"}}>
                            <img className = "car" src = {bajacar} alt = 'baja car' width = "100%"/><br/>
                        
                        The mini buggy made for BAJA SAE INDIA 2017</p>
                        <p style = {{fontSize : "1.1rem", fontFamily : "sans-serif"}}>
                            <img className = "group" src = {group} alt = 'baja team' width = "80%"/><br/>
                        
                        My BAJA team. (P.S. I'm the one sitting in the front with a blue t-shirt :P)</p>
                    </div>
                    <p>
                    I pursued Masters at Delft University of Technology. Again Mechanical! But I had a thought to try something different apart from 
                    production or 3D modeling or vehicle dynamics. So I chose a different track - Human Factors, which became my career. I wanted to put
                    my knowledge of creative designing into play. <br/><br/>I started loving psychology and HMIs and how they are linked together to make a meaningful
                    user experience. I went through literature and proposed a unique thesis idea to my Professors and they were astonished by the 
                    idea. They helped me in every way they could to finish my thesis in an interesting and successful way. My Professors thought that this 
                    thesis would serve as a plus to the Human Factors community and we compiled it to a journal article which is under the peer review process currently. </p>

                    <h2>
                        Covid-19 Pandemic - A boon to my Career 
                    </h2>
                    <p>
                        After graduation, I came for a 'one month' (now 6 months and ongoing ) holiday to my home country - India. I was enjoying for a month, but 
                        I'm a person who wants to explore stuff and keep learning. I started browing through and came across online courses in UX/UI design and Web design and development
                        and started practicing for over 7 hours every day until I started mastering them.
                        I felt that I was lagging experience even though I had knowledge. So I created my own opportunity by 
                        creating a dedicated pet adoption website for a pet center in my city.
                        The client was very happy when I approached them. And now with two experiences in hand, I'm getting requests for small side projects
                        from my close friends and relatives to design mobile apps or websites which I intend to start by the end of September 2020.</p>

                    <h2>
                        My loves 
                    </h2>
                    <p>
                        COFFEE! COFFEE! COFFEE!!!!! <br/>Have a cup of COFFEE with me and you'll get to know me when you finish the last sip ;) <br/>
                        Coffee is the charge to my soul. I play video games- I have coffee to enjoy a victory. I go on adventures- I have coffee 
                        to enhance my adventurous mood even more. I go on meetings- I'll have atleast 3 cups of coffee on my desk so that it lasts the meeting.
                        Apart from drinking coffee, I love to go on bike rides (with a motorbike in India, and obviously a bike in the Netherlands) on weekends. 
                        You want to play sport with me, I'm always in. There's nothing I don't like in this world. I see everything as an adventure and something new
                        to learn.
                    </p>

                        <h2>A portfolio from scratch!?</h2>
                        <p>There're tons of templates to copy and modify. 
                    But I had other thoughts. Why not portray my skills through my own designing and coding of my portfolio? Well, it took me
                    20 hours (not bad for a junior designer I think). I've been following the notion to never copy designs except for reference. 
                    This makes me believe on how creative I can get. </p><br/>
                    I'm currently open to opportunities in the field of UX/UI/HMI design and development. 
                    If you find me and my <Link style = {{textDecoration : "none", color : "blue"}} to = '/work'>work</Link> interesting, please reach out to me using the <Link style = {{textDecoration : "none", color : "blue"}} to = '/ContactMe'>contact form</Link> 
                            
                    
                </div>
                </div>
            </div>
        );
    }
}

export default About;