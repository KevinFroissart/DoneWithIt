import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import AppCard from '../components/AppCard';
import AppScreen from '../components/AppScreen';
import colors from '../config/colors';
import routes from '../navigation/routes';

const listings = [
    {
        id: 1,
        title: 'Red Jacket for sale',
        price: 100,
        image: require('../assets/jacket.jpg'),
    },
    {
        id: 2,
        title: 'Couch in great conditon',
        price: 100,
        image: require('../assets/couch.jpg'),
    }
];

function ListingScreen({ navigation }) {
    return (
        <AppScreen style={styles.screen}>
            <FlatList 
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <AppCard 
                        title={item.title} 
                        subTitle={"$" + item.price} 
                        image={item.image} 
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                    />
                }
            />
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    }
})

export default ListingScreen;