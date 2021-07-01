import React, { useState } from 'react';
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
import { useAuth } from '../../contexts/AuthContext';
import apiCall from './ApiCall';
import { useHistory } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

export default function DegreeInformation() {

    const { register, handleSubmit, formState: { errors }, control } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    });

    const history = useHistory();

    const { currentUser, getToken } = useAuth();

    const [err, setErr] = useState('');
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {

        try {
            setLoading(true);
            setErr('');
            const idToken = await getToken();
            const id = currentUser.uid;


            const payload = {
                ...data,
                id
            };

            //  https://httpbin.org/anything
            const res = await apiCall('http://localhost:1337/api/doctor/degree-information', payload, idToken);

            if (!!res.error) {
                throw Error(res.error);
            }

            setLoading(false);
            history.push('/update');
        } catch (e) {
            setLoading(false);
            setErr(e.message);
        }

    };

    return (
        <>
            <FormComponent onSubmit={handleSubmit(onSubmit)}>
                <Heading>Educational Qualification</Heading>
                <Alert variant="danger" show={!!err}>{err}</Alert>
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
                <PrimaryButton state={loading} label="Submit" />
            </FormComponent>
        </>
    );

}