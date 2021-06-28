import * as yup from 'yup';

const schema = yup.object().shape({
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