import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import defaultStyles from '../config/styles';
import AppText from './AppText';
import AppScreen from './AppScreen';
import { FlatList } from 'react-native-gesture-handler';
import AppPickerItem from './AppPickerItem';

function AppPicker({ icon, placeholder, onSelectItem, selectedItem, items, width='100%', PickerItemComponent=AppPickerItem, numberOfColumns=1 }) {
    const [modalVisible, setModalVisible] = useState(false) 

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, {width}]}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon}/>}
                    { selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText> : <AppText style={styles.placeholder}>{placeholder}</AppText> }
                    <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium}/>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide'>
                <AppScreen>
                    <Button title='close' onPress={() => setModalVisible(false)}/>
                    <FlatList 
                        data={items}
                        numColumns={numberOfColumns}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) => 
                            <PickerItemComponent 
                                item={item}
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