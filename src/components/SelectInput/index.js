import React from 'react';
import { Form, Col } from 'react-bootstrap';

export default function SelectInput(props) {
    return (
        <>
            <Form.Group as={Col} md={props.mid} className="mb-3">
                <Form.Label>{props.label}</Form.Label>
                <Form.Control as="select" {...props.hookForm} isInvalid={!!props.error}>
                    <option value="" key={0}>--Select--</option>
                    {props.arr.map((data, ind) => { return <option value={data} key={ind + 1}>{data}</option> })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                    {!!props.error ? props.error.message : ''}
                </Form.Control.Feedback>
            </Form.Group>
        </>
    )
}
