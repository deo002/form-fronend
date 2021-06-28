import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';

export default function NavigationBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/" >MSVC</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/" >Home</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/signup" >Sign Up</Nav.Link>
                        <Nav.Link as={Link} to="/login" >Login</Nav.Link>
                        <Nav.Link as={Link} to="/logout" >Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
