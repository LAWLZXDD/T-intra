import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation(){

    return(
        <Navbar className="main-navbar" expand="lg">
                <Navbar.Brand><Link to="/" className="homelogo">Server Workstation Integration</Link></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="nav-item-set">
                    <Nav.Item><Link to="Basics" className="nav-links">Computer Basics</Link></Nav.Item>
                    <Nav.Item><Link to="Networking" className="nav-links">Networking</Link></Nav.Item>
                    <Nav.Item><Link to="Vmware" className="nav-links">VMWare</Link></Nav.Item>
                    <Nav.Item><Link to="Windows" className="nav-links">Windows</Link></Nav.Item>
                    <Nav.Item><Link to="Linux" className="nav-links">Linux</Link></Nav.Item>
                    <Nav.Item><Link to="Troubleshooting" className="nav-links">Troubleshooting</Link></Nav.Item>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation