import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";
import Colors from "../constants/colors";
import { color } from "react-native-reanimated";
import colors from "../constants/colors";
import CategoryGridTile from "../components/CategoryGridTile";

const HomeScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        nav={navigation}
        icon={itemData.item.icon}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <View style={{ padding: 10 }}>
        {/* <Button
          title="Reminder"
          onPress={() => navigation.navigate("Reminder")}
        /> */}

        <SafeAreaView style={styles.container}>
          <FlatList
            scrollEnabled={true}
            numColumns={2}
            data={DATA}
            renderItem={renderGridItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>

      <View style={styles.bottom}>
        <Text>Version 0.1</Text>
        <Text>Company Name</Text>
        <Image source={require("../assets/favicon.png")} />
      </View>
    </View>
  );
};

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const DATA = [
  {
    id: "1",
    title: "Reminder",
    icon: "../assets/Reminder.png",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
  {
    id: "4",
    title: "This is a long icon title text",
  },
  {
    id: "5",
    title: "Second Item",
  },
  {
    id: "6",
    title: "Third Item",
  },
  {
    id: "7",
    title: "Etc",
  },
];

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backgrnd,
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
