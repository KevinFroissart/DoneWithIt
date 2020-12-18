import React from 'react';
import ErrorMessage from './AppErrorMessage';
import AppTextInput from '../AppTextInput';
import { useFormikContext } from 'formik';

function AppFormField({ name, width, ...ortherProps }) {
    const {setFieldTouched, touched, errors, handleChange} = useFormikContext();
    
    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                width={width}
                {...ortherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormField;