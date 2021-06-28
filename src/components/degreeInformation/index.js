import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './Schema';
import Input from '../Input';
import SelectInput from '../SelectInput';
import DatePicker from '../DatePicker';
import PrimaryButton from '../PrimaryButton';
import FormComponent from '../FormComponent';
import Heading from '../Heading';
import { Row } from 'react-bootstrap';

export default function DegreeInformation() {

    const { register, handleSubmit, formState: { errors }, control } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <FormComponent onSubmit={handleSubmit(onSubmit)}>
                <Heading>Educational Qualification</Heading>
                <Row>
                    <Input
                        label="University Name"
                        error={errors.universityName}
                        hookForm={register('universityName')}
                    />
                    <Input
                        label="College Name"
                        error={errors.collegeName}
                        hookForm={register('collegeName')}
                    />
                </Row>
                <Row>
                    <SelectInput
                        label="Degree"
                        hookForm={register("degree")}
                        arr={["BVSc", "BVSc & AH", "MVSc", "MVSc & AH", "Ph.D.", "MRCVS", "BVM"]}
                        error={errors.degree}
                        mid="6"
                    />
                    <DatePicker
                        fieldName="datePassed"
                        control={control}
                        label="Date Passed"
                        error={errors.datePassed}
                        mid="6"
                    />
                </Row>
                <PrimaryButton label="Submit" />
            </FormComponent>
        </>
    );

}