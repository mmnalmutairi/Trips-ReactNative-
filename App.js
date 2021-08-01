import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RootNavigator from "./components/Navigation/index";

/**
 * GENERAL NOTES
 *
 * Use Prettier to auto-format your code.
 */

// Remove this line, it's not for this file
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
