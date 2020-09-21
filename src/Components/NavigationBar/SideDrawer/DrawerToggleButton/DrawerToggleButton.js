import React from 'react';
import toggleButton from '../../../../assets/menubaricon.png';
import whitetogglebutton from '../../../../assets/menubariconwhite.png'
import './DrawerToggleButton.css';

const drawerToggleButton = props =>{
    let image = <img className = "anim" src = {toggleButton} alt = "cat paw toggle button"/>
    if(props.path === '/'){
        image = <img className = "anim" src = {whitetogglebutton} alt = "cat paw toggle button"/>
    }
    return(
    <div className = "toggleButton" onClick = {props.click}>
        {image}
    </div>
    )
}
    

export default drawerToggleButton;