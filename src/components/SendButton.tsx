import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import SendIcon from "../assets/İcons";

const SendButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <SendIcon/>
    </TouchableOpacity>
  );
};

export default SendButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1077AF",
    height: s(46),
    width: s(46),
    borderRadius: s(23),
    justifyContent: "center",
    alignItems: "center",
  },
});
