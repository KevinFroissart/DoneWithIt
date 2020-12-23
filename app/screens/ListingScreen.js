import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import AppCard from '../components/AppCard';
import AppScreen from '../components/AppScreen';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import AppActivityIndicator from '../components/AppActivityIndicator';
import useApi from '../hooks/useApi';

function ListingScreen({ navigation }) {
    const getListingsApi = useApi(listingsApi.getListings);

    useEffect(() => {
        getListingsApi.request();
    }, []);

    return (
        <>
            <AppActivityIndicator visible={getListingsApi.loading}/>
            <AppScreen style={styles.screen}>
                {getListingsApi.error && <>
                    <AppText>Couldn't retrieve the listings.</AppText>
                    <AppButton title="Retry" onPress={getListingsApi.request}/>
                </>}
                <FlatList 
                    data={getListingsApi.data}
                    keyExtractor={data => data.id.toString()}
                    renderItem={({ item }) =>
                        <AppCard 
                            title={item.title} 
                            subTitle={"$" + item.price} 
                            imageUrl={item.images[0].url} 
                            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                            thumbnailUrl={item.images[0].thumbnailUrl}
                        />
                    }
                />
            </AppScreen>
        </>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    }
})

export default ListingScreen;