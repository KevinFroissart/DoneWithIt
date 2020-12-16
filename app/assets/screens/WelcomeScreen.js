import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../background.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../logo-red.png')}/>
                <Text style={styles.moto}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#fc5c65",
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#4ecdc4",
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: "center",
    },
    logoContainer: {
        position: "absolute",
        top: 70,
    },
    moto: {
        top: 10,
    }, 
})

export default WelcomeScreen;