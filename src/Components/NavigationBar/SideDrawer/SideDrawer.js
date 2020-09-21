import React from 'react';
import {NavLink} from 'react-router-dom';

import './SideDrawer.css';
import Logo from './Logo/Logo';

const sideDrawer = props =>{
    let drawerClasses = ['side-drawer close']
    if(props.show){
        drawerClasses = ['side-drawer open'];
    }
   return(
    <nav className = {drawerClasses}>
        <div className = "toolbar_logo"><NavLink to = '/'><Logo/></NavLink></div>
        <hr/>
        <ul>
            <li><NavLink to = '/about'>About</NavLink></li>
            <li><NavLink to = '/work'>Work</NavLink></li>
            <li><NavLink to = '/CV'>CV</NavLink></li>
            <li><NavLink to = '/ContactMe'>Contact Me!</NavLink></li>
        </ul>
    </nav>
   ) 
}

export default sideDrawer;