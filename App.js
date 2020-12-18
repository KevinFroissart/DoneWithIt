import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppButton from './app/components/AppButton';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppCard from './app/components/AppCard';
import ViewImageScreen from './app/screens/ViewImageScreen'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AppScreen from './app/components/AppScreen';
import AppIcon from './app/components/AppIcon';
import AppListItem from './app/components/AppListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';


export default function App() {
  return (
    <ListingScreen/>
  );
}
