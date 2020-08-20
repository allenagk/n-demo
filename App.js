import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ReminderScreen from "./screens/ReminderScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Reminder" component={ReminderScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="new" />
      <HomeScreen />
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
