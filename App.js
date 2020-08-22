import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ReminderScreen from "./screens/ReminderScreen";
import EtcScreen from "./screens/EtcScreen";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { color } from "react-native-reanimated";
import colors from "./constants/colors";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={MyNavTheme} />
      <Stack.Screen name="Etc" component={EtcScreen} options={MyNavTheme} />
      <Stack.Screen
        name="Reminder"
        component={ReminderScreen}
        options={MyNavTheme}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="The new workstyle " />
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

//Navigation bar theme
const MyNavTheme = {
  //title: "Mission Reminder",
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    //fontWeight: "bold",
    color: colors.black,
  },
};
