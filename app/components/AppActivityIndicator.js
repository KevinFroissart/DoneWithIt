import React from 'react';
import LottieView from 'lottie-react-native';
import { View, StyleSheet } from 'react-native';

function AppActivityIndicator({ visible = false }) {
    if(!visible) return null;
    return (
        <View style={styles.overlay}>
            <LottieView 
                autoPlay
                loop
                source={require('../assets/animations/lf30_editor_ulmjhlhr.json')
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        height: '100%',
        width: '100%',
        position: "absolute",
        backgroundColor: "white",
        zIndex: 1,
        opacity: 0.8,
    }
})

export default AppActivityIndicator;