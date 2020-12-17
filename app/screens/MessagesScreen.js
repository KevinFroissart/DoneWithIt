import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import AppListItem from '../components/AppListItem';
import AppScreen from '../components/AppScreen';
import AppListItemSeparator from '../components/AppListItemSeparator';
import AppListItemDeleteAction from '../components/AppListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg'),
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg'),
    },
]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing ] = useState(false);

    const handleDelete = message => {
        const newMessages = setMessages(messages.filter(m => m.id !== message.id));
    }
    
    return (
        <AppScreen>
            <FlatList 
                data={messages}
                keyExtractor={messages => messages.id.toString()}
                renderItem={({ item }) => (
                    <AppListItem 
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message selected", item)}
                        renderRightActions={() => 
                            <AppListItemDeleteAction onPress={() => handleDelete(item)}/>}
                    />)}
                ItemSeparatorComponent={AppListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {setMessages([{
                    id: 2,
                    title: 'T2',
                    description: 'D2',
                    image: require('../assets/mosh.jpg'),
                }])}}
            />
        </AppScreen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;