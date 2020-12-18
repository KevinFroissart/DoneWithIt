import React, { useState } from 'react';
import { Switch, Text, TextInput, View } from 'react-native';
import AppPicker from './app/components/AppPicker';
import AppScreen from './app/components/AppScreen';
import AppTextInput from './app/components/AppTextInput';

const categories = [
  { label: "Furniture", value: 1},
  { label: "Clothing", value: 2},
  { label: "Watches", value: 3},
]

export default function App() {
  const [category, setCategory] = useState();
  
  return (
    
    <AppScreen >
      <AppPicker 
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        placeholder='Category' 
        icon="apps"/>
      <AppTextInput placeholder='email' icon="email"/>
    </AppScreen>
  );
}
