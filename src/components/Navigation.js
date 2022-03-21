import {useState} from 'react'
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function Navigation() {

    const [expanded, setExpanded] = useState(false);


    return (
            <Navbar expanded={expanded} className="main-navbar sticky-top" expand="xl">
                <Navbar.Brand><Link onClick={() => setExpanded(false)} to="t-intra" className="homelogo">Server Workstation Integration</Link></Navbar.Brand>
                <Navbar.Toggle  onClick={() => setExpanded(expanded ? false : "expanded")}  />
                <Navbar.Collapse className="nav-item-set">
                    <Nav.Item><NavLink onClick={() => setExpanded(false)} to="Basics" className='nav-links' >Computer Basics</NavLink></Nav.Item>
                    <Nav.Item><NavLink onClick={() => setExpanded(false)} to="Networking" className='nav-links'>Networking</NavLink></Nav.Item>
                    <Nav.Item><NavLink onClick={() => setExpanded(false)} to="Vmware" className='nav-links'>VMWare</NavLink></Nav.Item>
                    <Nav.Item><NavLink onClick={() => setExpanded(false)} to="Windows" className='nav-links'>Windows</NavLink></Nav.Item>
                    <Nav.Item><NavLink onClick={() => setExpanded(false)} to="Linux" className='nav-links'>Linux</NavLink></Nav.Item>
                    <Nav.Item><NavLink onClick={() => setExpanded(false)} to="Troubleshooting" className='nav-links'>Troubleshooting</NavLink></Nav.Item>
                </Navbar.Collapse>
            </Navbar>
    )
}

export default Navigation