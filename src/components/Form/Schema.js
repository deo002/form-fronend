import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .matches(/^[a-zA-Z_ ]*$/, "Name cannot contain special characters")
        .required("This field cannot be empty"),
    fathersName: yup
        .string()
        .trim()
        .matches(/^[a-zA-Z_ ]*$/, "Father's name cannot contain special characters")
        .required("This field cannot be empty"),
    mothersName: yup
        .string()
        .trim()
        .matches(/^[a-zA-Z_ ]*$/, "Mother's name cannot contain special characters")
        .required("This field cannot be empty"),
    nationality: yup
        .string()
        .trim()
        .matches(/^[a-zA-Z_ ]*$/, "Nationality cannot contain special characters")
        .required("This field cannot be empty"),
    residentState: yup
        .string()
        .trim()
        .matches(/^[a-zA-Z_ ]*$/, "Nationality cannot contain special characters")
        .required("This field cannot be empty"),
    aadharno: yup
        .string()
        .trim()
        .required("This field cannot be empty"),
    gender: yup
        .string()
        .trim()
        .required("This field cannot be empty"),
    employment: yup
        .string()
        .trim()
        .required("This field cannot be empty"),
    category: yup
        .string()
        .trim()
        .required("This field cannot be empty"),
    birthdate: yup
        .string("This field cannot be empty")
        .nullable()
        .trim()
        .required("This field cannot be empty"),
    collegeName: yup
        .string()
        .trim()
        .required("This field cannot be empty"),
    universityName: yup
        .string()
        .trim()
        .required("This field cannot be empty"),
    datePassed: yup
        .string("This field cannot be empty")
        .nullable()
        .trim()
        .required("This field cannot be empty"),
    degree: yup
        .string()
        .trim()
        .required("This field cannot be empty"),
    mobileNumber: yup
        .string()
        .trim()
        .matches(/^[0-9]*$/, "Mobile number not in desired format")
        .required("Mobile nunmber cannot be empty")
        .length(10, "Mobile number not in desired format"),
    alternateMobileNumber: yup
        .string()
        .trim()
        .matches(/^[0-9]*$/, "Mobile number not in desired format")
        .required("Mobile nunmber cannot be empty")
        .length(10, "Mobile number not in desired format"),
    emailId: yup
        .string()
        .trim()
        .email("Not a vaild email address")
        .required("This field cannot be empty"),
    alternateEmailId: yup
        .string()
        .trim()
        .email("Not a vaild email address")
        .required("This field cannot be empty"),
    address: yup
        .string()
        .trim()
        .required("This field cannot be empty"),
    state: yup
        .string()
        .trim()
        .required("This field cannot be empty"),
    district: yup
        .string()
        .trim()
        .required("This field cannot be empty"),
    zipcode: yup
        .string()
        .trim()
        .matches(/^[0-9]*$/, "Zip Code not in desired format")
        .required("Zip Code cannot be empty")
        .length(6, "Zip Code not in desired format"),
    workplaceAddress: yup
        .string()
        .trim()
        .required("This field cannot be empty"),
    workplaceState: yup
        .string()
        .trim()
        .required("This field cannot be empty"),
    workplaceDistrict: yup
        .string()
        .trim()
        .required("This field cannot be empty"),
    workplaceZipcode: yup
        .string()
        .trim()
        .matches(/^[0-9]*$/, "Zip Code not in desired format")
        .required("Zip Code cannot be empty")
        .length(6, "Zip Code not in desired format"),
});

export default schema;