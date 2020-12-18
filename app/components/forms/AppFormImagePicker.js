import { useFormikContext } from 'formik';
import { AppErrorMessage } from '.';
import React from 'react';
import AppImageInputList from '../AppImageInputList';

function AppFormImagePicker({ name }) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    const imageUris = values[name];
    const handleAdd = uri => {
        setFieldValue(name, [...imageUris, uri])
    }
    
    const handleRemove = uri => {
        setFieldValue(name, imageUris.filter(imageUri => imageUri !== uri));
    }
    

    return (
        <>
            <AppImageInputList 
                imageUris={imageUris}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
            <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormImagePicker;