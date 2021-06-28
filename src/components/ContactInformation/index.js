import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './Schema';
import Input from '../Input';
import SelectInput from '../SelectInput';
import PrimaryButton from '../PrimaryButton';
import FormComponent from '../FormComponent';
import TextAreaBox from '../TextArea';
import Heading from '../Heading';
import { Row, Col } from 'react-bootstrap';
import States from '../States.json';
import StatesDistricts from '../States-Districts.json';

export default function ContactInformation() {

    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    });

    const watchState = watch("state", "");
    const watchWorkplaceState = watch("workplaceState", "");

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <FormComponent onSubmit={handleSubmit(onSubmit)}>
                <Heading>Contact Details</Heading>
                <Row>
                    <Input
                        label="Mobile Number"
                        error={errors.mobileNumber}
                        hookForm={register('mobileNumber')}
                    />
                    <Input
                        label="Alternate Mobile Number"
                        error={errors.alternateMobileNumber}
                        hookForm={register('alternateMobileNumber')}
                    />
                </Row>
                <Row>
                    <Input
                        label="Email ID"
                        error={errors.emailId}
                        hookForm={register('emailId')}
                    />
                    <Input
                        label="Alternate Email ID"
                        error={errors.alternateEmailId}
                        hookForm={register('alternateEmailId')}
                    />
                </Row>
                <Row>
                    <TextAreaBox
                        label="Permanent Address"
                        hookForm={register('address')}
                        error={errors.address}
                    />
                    <Col md="6">
                        <SelectInput
                            label="State"
                            hookForm={register("state")}
                            arr={(function () {
                                const stateNames = [];
                                States.forEach((state) => {
                                    stateNames.push(state.name);
                                });
                                return stateNames;
                            })()}
                            error={errors.state}
                            mid="12"
                        />
                        <SelectInput
                            label="District"
                            hookForm={register("district")}
                            arr={(function () {
                                if (!(!!watchState))
                                    return [];
                                const _state = StatesDistricts.find((elem) => elem.state === watchState);
                                return _state.districts;
                            })()}
                            error={errors.district}
                            mid="12"
                        />
                    </Col>
                </Row>
                <Row>
                    <Input
                        label="Zip Code"
                        error={errors.zipcode}
                        hookForm={register('zipcode')}
                    />
                </Row>
                <Row>
                    <TextAreaBox
                        label="Workplace Address"
                        hookForm={register('workplaceAddress')}
                        error={errors.workplaceAddress}
                    />
                    <Col md="6">
                        <SelectInput
                            label="State"
                            hookForm={register("workplaceState")}
                            arr={(function () {
                                const stateNames = [];
                                States.forEach((state) => {
                                    stateNames.push(state.name);
                                });
                                return stateNames;
                            })()}
                            error={errors.workplaceState}
                            mid="12"
                        />
                        <SelectInput
                            label="District"
                            hookForm={register("workplaceDistrict")}
                            arr={(function () {
                                if (!(!!watchWorkplaceState))
                                    return [];
                                const _state = StatesDistricts.find((elem) => elem.state === watchWorkplaceState);
                                return _state.districts;
                            })()}
                            error={errors.workplaceDistrict}
                            mid="12"
                        />
                    </Col>
                </Row>
                <Row>
                    <Input
                        label="Zip Code"
                        error={errors.workplaceZipcode}
                        hookForm={register('workplaceZipcode')}
                    />
                </Row>
                <PrimaryButton label="Submit" />
            </FormComponent>
        </>
    );

}