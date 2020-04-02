import React, { useState } from 'react';

export const useFormState = defaultValue => {
    const [state, setState] = useState({
        ...defaultValue,
        formValidated: true,
        formSubmitting: false,
        formError: {},
    });

    const handleInputChange = e => {
        const { id, value } = e.target;
        handleChange(id, value);
    };

    const handleChange = (id, value) => {
        setState(prevState => ({
            ...prevState,
            [id]: value,
        }));
    };

    const formDataForSubmission = () => {
        const { formValidated, formError, formSubmitting, ...formData } = state;
        return formData;
    };

    return [state, handleChange, handleInputChange, formDataForSubmission];
};
