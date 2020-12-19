import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from '../screens/AccountScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import ListingScreen from '../screens/ListingScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Listing" component={ListingScreen} />
        <Tab.Screen name="ListingEdit" component={ListingEditScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
)

export default AppNavigator;