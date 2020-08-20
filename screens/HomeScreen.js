import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Colors from "../constants/colors";

import ReminderScreen from "./ReminderScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={{ padding: 10 }}>
        <Text>Put buttons inside this View</Text>
        <Button
          title="Reminder"
          onPress={() => navigation.navigate("Reminder")}
        />
      </View>

      <View style={styles.bottom}>
        <Text>Version 0.1</Text>
        <Text>Company Name</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  bottom: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    backgroundColor: Colors.primary,
    width: "100%",
    height: 90,
    padding: 10,
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
});

export default HomeScreen;
