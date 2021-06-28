import React from 'react'
import { Form, Col } from 'react-bootstrap';

export default function FileUpload(props) {
    return (
        <>
            <Form.Group as={Col} sm="6" md="4" className="mb-5">
                <Form.Control
                    type="file"
                    defaultValue={null}
                    label={props.label}
                    {...props.hookForm}
                    isInvalid={!!props.error}
                />
                <Form.Control.Feedback type="invalid">
                    {!!props.error ? props.error.message : ''}
                </Form.Control.Feedback>
            </Form.Group>
        </>
    );
}
