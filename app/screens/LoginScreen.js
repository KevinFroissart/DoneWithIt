import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

function LoginScreen(props) {

    return (
        <AppScreen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            <Formik
                initialValues={{ email: '', password: ''}}
                onSubmit={values => console.log(values)} 
            >
                { ({ handleChange, handleSubmit }) => (
                    <>
                        <AppTextInput
                            icon="email"
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            onChangeText={handleChange("email")}
                            textContentType="emailAddress"
                            placeholder='Email'
                        />
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            onChangeText={handleChange("password")}
                            placeholder="Password"
                            secureTextEntry
                            textContentType="Password"
                        />
                        <AppButton 
                            title="Login" onPress={handleSubmit}
                        />
                    </>
                )}
            </Formik>
            
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 50,
    }
})

export default LoginScreen;