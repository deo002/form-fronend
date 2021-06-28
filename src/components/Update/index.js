import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Information from './Information';
import Sidebar from './Sidebar';
import './index.css';

export default function Home() {
    return (
        <>
            <Row>
                <Col sm="12" md="8">
                    <Information />
                </Col>
                <Col sm="12" md="4">
                    <Sidebar />
                </Col>
            </Row>
        </>
    )
}
