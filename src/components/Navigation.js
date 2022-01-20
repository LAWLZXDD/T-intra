import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


function Navigation(){

    return(
        <div>
            <Navbar bg="dark" expand="md">
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Item><Link to="/">Home</Link></Nav.Item>
                            <Nav.Item><Link to="Basics">Computer Basics</Link></Nav.Item>
                            <Nav.Item><Link to="Networking">Networking</Link></Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation