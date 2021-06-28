import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <>
            <ListGroup className="mt-5">
                <ListGroup.Item action variant="light">
                    <Link to="/personal-information"> Personal Information </Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="light">
                    <Link to="/degree-information"> Degree Information </Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="light">
                    <Link to="/contact-information"> Contact Information </Link>
                </ListGroup.Item>
            </ListGroup>
        </>
    )
}
