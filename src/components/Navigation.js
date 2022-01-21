import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";




function Navigation(){

    return(
        <Navbar className="main-navbar" expand="md">
                <Navbar.Brand><Link to="/" className="brandlogo">Server Workstation Integration</Link></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav.Item className="navitem"><Link to="Basics" className="nav-links">Computer Basics</Link></Nav.Item>
                    <Nav.Item className="navitem"><Link to="Networking" className="nav-links">Networking</Link></Nav.Item>
                    <Nav.Item className="navitem"><Link to="Vmware" className="nav-links">VMWare</Link></Nav.Item>
                    <Nav.Item className="navitem"><Link to="Windows" className="nav-links">Windows</Link></Nav.Item>
                    <Nav.Item className="navitem"><Link to="Linux" className="nav-links">Linux</Link></Nav.Item>
                    <Nav.Item className="navitem"><Link to="Troubleshooting" className="nav-links">Troubleshooting</Link></Nav.Item>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation