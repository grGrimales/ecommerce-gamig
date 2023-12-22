import * as Yup from "yup";

export function initiValues() {
    return {
            identifier: "",
            password: "",
            
    }
}

export function validationSchema() {
    return Yup.object({
        identifier: Yup.string().required(true),
        password: Yup.string(true).required(true),
    })
}