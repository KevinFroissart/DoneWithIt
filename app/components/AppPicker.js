import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import defaultStyles from '../config/styles';
import AppText from './AppText';
import AppScreen from './AppScreen';
import { FlatList } from 'react-native-gesture-handler';
import AppPickerItem from './AppPickerItem';

function AppPicker({ icon, placeholder, onSelectItem, selectedItem,  items }) {
    const [modalVisible, setModalVisible] = useState(false) 

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon}/>}
                    { selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText> : <AppText style={styles.placeholder}>{placeholder}</AppText> }
                    {icon && <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium}/>}
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide'>
                <AppScreen>
                    <Button title='close' onPress={() => setModalVisible(false)}/>
                    <FlatList 
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) => 
                            <AppPickerItem 
                                label={item.label} 
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }}
                                
                            />
                        }
                    />
                </AppScreen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight:10,
    },
    placeholder : {
        color: defaultStyles.colors.medium,
    },
    text: {
        flex: 1,
    }

})

export default AppPicker;