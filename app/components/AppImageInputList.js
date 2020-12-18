import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppImageInput from './AppImageInput';

function AppImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
    const scrollView = useRef();
    
    return (
        <View>
            <ScrollView ref={scrollView} horizontal onContentSizeChange={() => scrollView.current.scrollToEnd()}>
                <View style={styles.container}>
                    {imageUris.map((uri) => (
                        <View key={uri} style={styles.image}>
                            <AppImageInput imageUri={uri} onChangeImage={() => onRemoveImage(uri)}/>
                        </View>
                    ))}
                    <AppImageInput onChangeImage={uri => onAddImage(uri)}/>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    image: {
        marginRight: 10,
    }
})

export default AppImageInputList;