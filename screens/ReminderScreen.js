import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import colors from "../constants/colors";

import ProgressBar from "../components/ProgressBar";
//import { ScrollView } from "react-native-gesture-handler";

const ReminderScreen = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = (x) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: x },
    ]);
  };

  const onButtonPress = () => {
    Alert.prompt(
      "Title of the window",
      "Description of the title",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: (x) => {
            //goalInputHandler(x);
            addGoalHandler(x);
            //goalInputHandler(x);
            //console.log(x);
          },
        },
      ],
      "plain-text"
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        {/* <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        /> */}
        <Button title="ADD" onPress={onButtonPress} />
      </View>

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Button title={itemData.item.value}></Button>
            {/* <Text>{itemData.item.value}</Text> */}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default ReminderScreen;
