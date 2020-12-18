import React, { useState } from 'react';
import { Switch, Text, TextInput, View } from 'react-native';
import AppPicker from './app/components/AppPicker';
import AppScreen from './app/components/AppScreen';
import AppTextInput from './app/components/AppTextInput';
import LoginScreen from './app/screens/LoginScreen';


export default function App() {  
  return (
    <LoginScreen />
  );
}
