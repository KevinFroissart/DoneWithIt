import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppButton from './app/components/AppButton';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppCard from './app/components/AppCard';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

export default function App() {
  return (
    <ListingDetailsScreen />
  );
}
