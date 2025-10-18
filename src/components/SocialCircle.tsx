import { View, StyleSheet } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import SendIcon from "../assets/İcons";

const SocialCircle = () => {
  return (
    <View style={styles.container}>
      <SendIcon/>
    </View>
  );
};

export default SocialCircle;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: s(46),
    width: s(46),
    borderRadius: s(23),
    justifyContent: "center",
    alignItems: "center",
    borderWidth:s(1),
    borderColor:"#E4E6E8"
  },
});
