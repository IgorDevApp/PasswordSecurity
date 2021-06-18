import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  SafeAreaView,
  View,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  Platform,
} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import * as LocalAuthentication from "expo-local-authentication";
import Senhas from "./src/screens/Senhas";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Senhas" component={Senhas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
