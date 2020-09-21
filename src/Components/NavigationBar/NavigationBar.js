import React, { Component } from 'react'
import Toolbar from '../NavigationBar/Toolbar/Toolbar';
import SideDrawer from '../NavigationBar/SideDrawer/SideDrawer'; 
import Backdrop from '../UI/Backdrop/Backdrop';

class NavigationBar extends Component {

    state ={
        sideDrawerOpen : false
    }

    drawerToggleClickHandler = () =>{
        this.setState((prevState) =>{
            return {sideDrawerOpen : !prevState.sideDrawerOpen}
        })
    }

    backdropClickHandler = () =>{
        this.setState({sideDrawerOpen : false})
    }

    render(){
        let backdrop;

        if(this.state.sideDrawerOpen){
            backdrop = <Backdrop click = {this.backdropClickHandler}/>
        }
        return(
            <div>
                <Toolbar 
                path = {this.props.path}
                drawerClickHandler = {this.drawerToggleClickHandler}
                show = {this.state.sideDrawerOpen}/>
                
                <SideDrawer show = {this.state.sideDrawerOpen}/>
                {backdrop}
            </div>
        );
    }
}

export default NavigationBar;