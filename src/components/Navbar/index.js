import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './index.css';

export default function NavigationBar() {

    const { currentUser, googleSignin, signout } = useAuth();
    const [errors, setErrors] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignIn = async () => {

        try {
            setLoading(true);
            await googleSignin();
            setLoading(false);
        } catch (e) {
            setErrors('Failed to Sign in. Try Again.');
            setLoading(false);
        }
    };

    const handleSignOut = async () => {
        try {
            setLoading(true);
            await signout();
            setLoading(false);
        } catch (e) {
            setErrors('Failed to Sign Out. Try Again.');
            setLoading(false);
        }
    };

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
                        {
                            !!currentUser ?
                                <Button
                                    variant="outline-primary"
                                    disabled={loading}
                                    onClick={handleSignOut}
                                >
                                    Sign Out
                                </Button> :
                                <Button
                                    variant="outline-primary"
                                    disabled={loading}
                                    onClick={handleSignIn}
                                >
                                    Sign In
                                </Button>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
