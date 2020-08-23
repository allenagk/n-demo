import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import colors from "../constants/colors";

import ProgressBar from "../components/ProgressBar";
import { ScrollView } from "react-native-gesture-handler";

const ReminderScreen = (props) => {
  return (
    <View style={styles.screen}>
      {/* <ScrollView> */}
      {/* Uncomment scrollview if want to scroll the page */}
      <ProgressBar title={"目的 A"} completion={40} />
      <ProgressBar title={"目的 B"} completion={30} />
      <ProgressBar title={"目的 C"} completion={30} />
      {/* </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.backgrnd,
    padding: 15,
  },
});

export default ReminderScreen;
