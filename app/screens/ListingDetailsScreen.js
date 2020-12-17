import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppListItem from '../components/AppListItem';
import AppText from '../components/AppText';
import colors from '../config/colors';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')}/>
            <View style={styles.detailConainter}>
                <AppText style={styles.title}>Red Jacket for sale</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContainer}>    
                    <AppListItem 
                        image={require('../assets/mosh.jpg')}
                        title="Mosh Hamedani"
                        subTitle="5 Listings"
                    />
                </View>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailConainter: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    },
    userContainer: {
        marginVertical: 40,
    }
})

export default ListingDetailsScreen;