import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import ReminderScreen from "../screens/ReminderScreen";

const Navigator = createStackNavigator({
  Home: HomeScreen,
  Reminder: {
    screen: ReminderScreen,
  },
});

export default createStackNavigator(Navigator);
