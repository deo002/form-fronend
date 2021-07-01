import React from 'react';
import { Form } from 'react-bootstrap';

export default function FormComponentMultipart({ children, ...props }) {
    return (
        <Form noValidate {...props} encType="multipart/form-data">{children}</Form>
    )
}
