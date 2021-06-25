import React from 'react'
import { Controller } from 'react-hook-form';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, Col } from 'react-bootstrap';
import './index.css';

export default function DatePicker(props) {
    return (
        <>
            <Form.Group as={Col} md={props.mid} className="mb-3">
                <Form.Label>{props.label}</Form.Label>
                <Controller
                    name={props.fieldName}
                    control={props.control}
                    defaultValue=""
                    render={({ field }) => (<Datepicker
                        onChange={(e) => field.onChange(e)}
                        selected={field.value}
                        dateFormat="dd/MM/yyyy"
                        maxDate={new Date()}
                        placeholderText="dd/mm/yyyy"
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                    />)}
                />
                {!!props.error && <p>{props.error.message}</p>}
            </Form.Group>
        </>
    )
}
