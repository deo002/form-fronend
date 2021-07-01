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

export default function PersonalInformation() {

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
            const idToken = await getToken();
            const id = currentUser.uid;

            const payload = {
                ...data,
                id
            };

            //  https://httpbin.org/anything
            const res = await apiCall('http://localhost:1337/api/doctor/personal-information', payload, idToken);

            if (!!res.error) {
                throw Error(res.error);
            }

            history.push('/update');
        } catch (e) {
            setLoading(false);
            setErr(e.message);
        }

    };


    return (
        <>
            <Heading>Personal Information</Heading>
            <FormComponent onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Input
                        label="Applicant's Name"
                        error={errors.name}
                        hookForm={register('name')}
                    />
                    <Input
                        label="Father's Name"
                        error={errors.fathersName}
                        hookForm={register('fathersName')}
                    />
                </Row>
                <Row>
                    <Input
                        label="Mother's Name"
                        error={errors.mothersName}
                        hookForm={register('mothersName')}
                    />
                    <Input
                        label="Nationality"
                        error={errors.nationality}
                        hookForm={register('nationality')}
                    />
                </Row>
                <Row>
                    <Input
                        label="Aadhar Card No."
                        error={errors.aadharno}
                        hookForm={register('aadharno')}
                    />
                    <Input
                        label="Resident State"
                        error={errors.residentState}
                        hookForm={register('residentState')}
                    />
                </Row>
                <Row>
                    <SelectInput
                        label="Gender"
                        hookForm={register("gender")}
                        arr={["Female", "Male", "Other"]}
                        error={errors.gender}
                        mid="3"
                    />
                    <SelectInput
                        label="Area of Employment"
                        hookForm={register("employment")}
                        arr={["Private", "Government", "Self Employeed"]}
                        error={errors.employment}
                        mid="3"
                    />
                    <SelectInput
                        label="Category"
                        hookForm={register("category")}
                        arr={["SC", "ST", "OBC", "SBC", "VJ", "NT", "Open"]}
                        error={errors.category}
                        mid="3"
                    />
                    <DatePicker
                        fieldName="birthdate"
                        control={control}
                        label="Date of Birth"
                        error={errors.birthdate}
                        mid="3"
                    />
                </Row>
                <PrimaryButton state={loading} label="Submit" />
            </FormComponent>
        </>
    );

}