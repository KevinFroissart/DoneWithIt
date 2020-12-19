import React from 'react';
import AppListItem from '../components/AppListItem';
import AppScreen from '../components/AppScreen';
import { StyleSheet, View, FlatList } from 'react-native';
import colors from '../config/colors';
import AppIcon from '../components/AppIcon';
import AppListItemSeparator from '../components/AppListItemSeparator';
import routes from '../navigation/routes';

const menuItems = [
    { title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        },
        targetScreen: routes.MESSAGES
    },
    { title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
        targetScreen: routes.MESSAGES
    }
]

function AccountScreen({ navigation }) {
    return (
        <AppScreen style={styles.screen}>
            <View style={styles.container}>    
                <AppListItem 
                    title="Kévin Froissart"
                    subTitle="kevin.froissart69@mail.com"
                    image={require('../assets/kevin.jpg')}
                />
            </View>
            <View style={styles.container}> 
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={AppListItemSeparator}
                    renderItem={({ item }) => 
                        <AppListItem 
                            title={item.title}
                            IconComponent={
                                <AppIcon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                            }
                            onPress={() => navigation.navigate(item.targetScreen)}
                        />
                    }
                />
            </View>
            <AppListItem 
                title='Log Out'
                IconComponent={<AppIcon name='logout' backgroundColor='#ffe66d'/>}
            />
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light,
    }
})

export default AccountScreen;