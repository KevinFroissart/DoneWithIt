import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppButton from './app/components/AppButton';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppCard from './app/components/AppCard';

export default function App() {
  return (
    <View style={{
      backgroundColor: 'f8f4f4',
      padding: 20,
      paddingTop: 100,
    
    }}>
      <AppCard 
        title='Red jacket for sale'
        subTitle='$100'
        image={require("./app/assets/jacket.jpg")}
        />
    </View>
  );
}
