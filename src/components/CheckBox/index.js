import React from 'react'
import { Form, Col } from 'react-bootstrap';

export default function CheckBox(props) {
    return (
        <>
            <Col md="6" className="mb-3">
                <Form.Check
                    type='checkbox'
                    label={props.label}
                    {...props.hookForm}
                />
            </Col>
        </>
    )
}
