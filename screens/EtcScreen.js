import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import colors from "../constants/colors";

const EtcScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>EtcScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.backgrnd,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EtcScreen;
