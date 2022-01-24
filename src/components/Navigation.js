import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
//TODO
//Add Active setting to selected course
//make collapse a better looking dropdown?



function Navigation(){

    return(
        <Navbar className="main-navbar" expand="xl">
                <Navbar.Brand><Link to="/" className="homelogo">Server Workstation Integration</Link></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="nav-item-set">
                        <Nav.Item><NavLink to="Basics" className={({isActive}) => "nav-links" + (isActive ?' selected' : '')} activeClassName="selected">Computer Basics</NavLink></Nav.Item>
                        <Nav.Item><NavLink to="Networking" className={({isActive}) => "nav-links" + (isActive ?' selected' : '')} activeClassName="selected">Networking</NavLink></Nav.Item>
                        <Nav.Item><NavLink to="Vmware" className={({isActive}) => "nav-links" + (isActive ?' selected' : '')} activeClassName="selected">VMWare</NavLink></Nav.Item>
                        <Nav.Item><NavLink to="Windows" className={({isActive}) => "nav-links" + (isActive ?' selected' : '')} activeClassName="selected">Windows</NavLink></Nav.Item>
                        <Nav.Item><NavLink to="Linux" className={({isActive}) => "nav-links" + (isActive ?' selected' : '')} activeClassName="selected">Linux</NavLink></Nav.Item>
                        <Nav.Item><NavLink to="Troubleshooting" className={({isActive}) => "nav-links" + (isActive ?' selected' : '')} activeClassName="selected">Troubleshooting</NavLink></Nav.Item>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation