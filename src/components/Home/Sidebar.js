import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <>
            <ListGroup className="mt-5">
                <ListGroup.Item action variant="light">
                    <Link to="/register"> Register </Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="light">
                    <Link to="/update"> Update Information </Link>
                </ListGroup.Item>
            </ListGroup>
        </>
    )
}
