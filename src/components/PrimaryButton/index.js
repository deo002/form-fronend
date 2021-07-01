import React from 'react';
import { Button } from 'react-bootstrap';

export default function PrimaryButton(props) {
    return (
        <Button variant="success" type="submit" disabled={props.state} >{props.label}</Button>
        // <button >Submit</button>
    )
}
