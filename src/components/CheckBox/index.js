import React from 'react'
import { Form, Col } from 'react-bootstrap';

export default function CheckBox(props) {
    return (
        <>
            <Col className="mb-3">
                <Form.Check
                    type='checkbox'
                    label={props.label}
                    {...props.hookForm}
                    isInvalid={!!props.error}
                />
            </Col>
        </>
    )
}
