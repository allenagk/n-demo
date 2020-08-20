import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ReminderScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>ReminderScreen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ReminderScreen;
