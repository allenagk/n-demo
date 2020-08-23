import React, { Component } from "react";
import { View, Text, Animated, StyleSheet } from "react-native";
import colors from "../constants/colors";
import { DangerZone } from "expo";

class ProgressBar extends Component {
  state = {
    percent: 0,
  };

  anim = new Animated.Value(0);

  componentDidMount() {
    this.onAnimate();
  }

  onAnimate = () => {
    this.anim.addListener(({ value }) => {
      this.setState({ percent: parseInt(value, 10) });
    });
    Animated.timing(this.anim, {
      toValue: this.props.completion, //set passed props value to here
      duration: 1000,
    }).start();
  };

  render() {
    console.log("this.props.title");
    console.log(this.props.title);

    return (
      <View>
        <Text style={styles.objecttitle}>{this.props.title}</Text>
        <View style={styles.container}>
          <Animated.View
            style={[styles.inner, { width: `${this.state.percent}%` }]}
          />
          <Animated.Text style={styles.label}>
            {`${this.state.percent / 10}/10`}
          </Animated.Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  objecttitle: {
    padding: 5,
    paddingTop: 20,
    fontSize: 20,
  },
  container: {
    width: "100%",
    height: 40,
    padding: 3,
    borderColor: colors.primary,
    borderWidth: 3,
    borderRadius: 20,
    justifyContent: "center",
  },
  inner: {
    width: "100%",
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.primary,
  },
  label: {
    fontSize: 18,
    color: colors.black,
    position: "absolute",
    zIndex: 1,
    alignSelf: "center",
  },
});

export default ProgressBar;
