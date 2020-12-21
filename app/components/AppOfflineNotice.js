import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import Constants from 'expo-constants';
import { useNetInfo } from '@react-native-community/netinfo';

function AppOfflineNotice(props) {
    const netInfo = useNetInfo();

    if(netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
        return (
            <View style={styles.container}>
                <AppText style={styles.text}>No Internet Connection</AppText>
            </View>
        );
    return null;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 80,
        width: '100%',
        paddingTop: Constants.statusBarHeight,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
    },
    text: {
        color: colors.white,
    }
})

export default AppOfflineNotice;