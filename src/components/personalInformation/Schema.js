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
});

export default schema;