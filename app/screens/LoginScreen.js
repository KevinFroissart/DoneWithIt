import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

function LoginScreen(props) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <AppScreen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            <AppTextInput
                icon="email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={text => setEmail(text)}
                textContentType="emailAddress"
                placeholder='Email'
            />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                onChangeText={text => setPassword(text)}
                placeholder="Password"
                secureTextEntry
                textContentType="Password"
            />
            <AppButton 
                title="Login" onPress={() => console.log(email, password)}
            />
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