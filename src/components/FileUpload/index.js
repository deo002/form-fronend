import React from 'react'
import { Form, Col } from 'react-bootstrap';

export default function FileUpload(props) {
    return (
        <>
            {/* <Form.Group as={Col} md="6" className="mb-3">
                <Form.Label>{props.label}</Form.Label>
                <Form.Control
                    type="file"
                    {...props.hookForm}
                    isInvalid={!!props.error}
                />
                <Form.Control.Feedback type="invalid">
                    {!!props.error ? props.error.message : ''}
                </Form.Control.Feedback>
            </Form.Group> */}
            {/* <div class="mb-3">
                <label class="form-label">{props.label}</label>
                <input class="form-control" type="file" {...props.hookForm} />
            </div>
            <div class="invalid-feedback">
                {!!props.error ? props.error.message : ''}
            </div> */}
        </>
    );
}
