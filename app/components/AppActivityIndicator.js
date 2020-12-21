import React from 'react';
import LottieView from 'lottie-react-native';

function AppActivityIndicator({ visible = false }) {
    if(!visible) return null;
    return (
        <LottieView 
            autoPlay
            loop
            source={require('../assets/animations/lf30_editor_ulmjhlhr.json')}
        />
    );
}

export default AppActivityIndicator;