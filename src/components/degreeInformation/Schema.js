import * as yup from 'yup';

const schema = yup.object().shape({
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
        .required("This field cannot be empty")
});

export default schema;