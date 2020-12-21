import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AppOfflineNotice from "./app/components/AppOfflineNotice";
import AppText from "./app/components/AppText";

export default function App() {
  return (
    <>
      <AppOfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator/>
      </NavigationContainer>
    </>
  );
}