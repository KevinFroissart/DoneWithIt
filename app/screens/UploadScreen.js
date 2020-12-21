import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import * as Progress from 'react-native-progress';
import colors from '../config/colors';
import LottieView from 'lottie-react-native'; 

function UploadScreen({ progress = 0, visible = false, onDone }) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {progress < 1 ? (
                    <Progress.Bar progress={progress} color={colors.blue} widtg={200}/>
                ) : (
                    <LottieView 
                        autoPlay 
                        loop={false}  
                        source={require('../assets/animations/done.json')} 
                        style={styles.animation}
                        onAnimationFinish={onDone}
                    />
                )}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    animation: {
        width: 150,
    }
})

export default UploadScreen;