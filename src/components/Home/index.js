import React from 'react';
import { Row, Col } from 'react-bootstrap';
import HomeContent from './HomeContent';
import Sidebar from './Sidebar';
import './index.css';

export default function Home() {
    return (
        <>
            <Row>
                <Col sm="12" md="8">
                    <HomeContent />
                </Col>
                <Col sm="12" md="4">
                    <Sidebar />
                </Col>
            </Row>
        </>
    )
}
