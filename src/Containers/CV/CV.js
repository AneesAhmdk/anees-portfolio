import React, { Component } from 'react'
import Cv from '../../assets/Anees_CV.pdf'
import NavigationBar from '../../Components/NavigationBar/NavigationBar';

class CV extends Component{
    render(){
        return(
            <div>
                <NavigationBar/>
                <object width="100%" height="750" data= {Cv} type="application/pdf">   </object>
            </div>
        )
    }
}

export default CV;