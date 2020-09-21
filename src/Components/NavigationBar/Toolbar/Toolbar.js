import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../../NavigationBar/SideDrawer/DrawerToggleButton/DrawerToggleButton';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo'

const toolbar = (props) => (
    <header className = "toolbar" >
        <nav className = "toolbar_navigation">
            <div className = "toolbar_toggle-button">
                <DrawerToggleButton  path = {props.path} click = {props.drawerClickHandler}/>
            </div>
            <div className = "toolbar_logo"><NavLink to = '/'><Logo path = {props.path}/></NavLink></div>
            <div className = "spacer"></div>
            <div className = "toolbar_navigation-items">
                <ul>
                    <li><NavLink to = '/about' activeClassName = "active" exact>About</NavLink></li>
                    <li>|</li>
                    <li><NavLink to = '/work' activeClassName = "active">Work</NavLink></li>
                    <li>|</li>
                    <li><NavLink to = '/CV' activeClassName = "active">CV</NavLink></li>
                    <li>|</li>
                    <li><NavLink to = '/ContactMe' activeClassName = "active">Contact Me!</NavLink></li>

                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;