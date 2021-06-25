import React from 'react';
import { Form, Col } from 'react-bootstrap';

export default function TextAreaBox(props) {
    return (
        <>
            <Form.Group as={Col} md="6" className="mb-3">
                <Form.Label>{props.label}</Form.Label>
                <Form.Control
                    as="textarea"
                    type="text"
                    {...props.hookForm}
                    isInvalid={!!props.error}
                    style={{ height: '126px' }}
                />
                <Form.Control.Feedback type="invalid">
                    {!!props.error ? props.error.message : ''}
                </Form.Control.Feedback>
            </Form.Group>
        </>
    )
}
