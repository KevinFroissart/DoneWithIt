import React from 'react';
import ErrorMessage from './AppErrorMessage';
import AppTextInput from './AppTextInput';
import { useFormikContext } from 'formik';

function AppFormField({ name, ...ortherProps }) {
    const {setFieldTouched, touched, errors, handleChange} = useFormikContext();
    
    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                {...ortherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormField;