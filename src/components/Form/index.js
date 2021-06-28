import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './Schema';
import Input from '../Input';
import SelectInput from '../SelectInput';
import DatePicker from '../DatePicker';
import PrimaryButton from '../PrimaryButton';
import FormComponent from '../FormComponent';
import TextAreaBox from '../TextArea';
import Heading from '../Heading';
import { Row, Col } from 'react-bootstrap';
import States from '../States.json';
import StatesDistricts from '../States-Districts.json';
import FileUpload from '../FileUpload';
import CheckBox from '../CheckBox';

export default function Form() {

    const { register, handleSubmit, formState: { errors }, control, watch } = useForm({
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
                <Heading>Document Details</Heading>
                <Row>
                    <FileUpload
                        label="Applicant's Photo"
                        hookForm={register('photo')}
                        error={errors.photo}
                    />
                    <FileUpload
                        label="Applicant's Signature"
                        hookForm={register('signature')}
                        error={errors.signature}
                    />
                    <FileUpload
                        label="Degree Certificate"
                        hookForm={register('degreeCertificate')}
                        error={errors.degreeCertificate}
                    />
                </Row>
                <Row>
                    <FileUpload
                        label="Transcript"
                        hookForm={register('transcript')}
                        error={errors.transcript}
                    />
                    <FileUpload
                        label="Aadhar Card"
                        hookForm={register('aadharCard')}
                        error={errors.aadharCard}
                    />
                    <FileUpload
                        label="ID Card"
                        hookForm={register('idCard')}
                        error={errors.idCard}
                    />
                </Row>
                <Row>
                    <FileUpload
                        label="Date of Birth Proof"
                        hookForm={register('dobProof')}
                        error={errors.dobProof}
                    />
                    <FileUpload
                        label="State Affidavit Proof"
                        hookForm={register('affidavitProof')}
                        error={errors.affidavitProof}
                    />
                    <FileUpload
                        label="Magistrate's Affidavit"
                        hookForm={register('affidavitMagistrate')}
                        error={errors.affidavitMagistrate}
                    />
                </Row>
                <Row>
                    <FileUpload
                        label="FIR Filed"
                        hookForm={register('fir')}
                        error={errors.fir}
                    />
                </Row>
                <PrimaryButton label="Submit" />
            </FormComponent>
        </>
    );

}