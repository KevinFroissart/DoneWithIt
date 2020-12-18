import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppIcon from './AppIcon';
import AppText from './AppText';

function AppCategoryPickerItem({ item, onPress }) {
    return <View style={styles.container}>
        <AppIcon backgroundColor={item.backgroundColor} name={item.icon}/>
        <AppText style={styles.label}>{item.label}</AppText>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: 'center',
        width: "33%",
    },
    label: {
        marginTop: 5,
        textAlign: 'center',
    }
})

export default AppCategoryPickerItem;