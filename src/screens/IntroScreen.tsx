import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import FoodLogo from "../assets/FoodLogo";
import SunImage from "../assets/SunImage";

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <FoodLogo />
      <SunImage style={styles.sun} />
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container:{flex:1,
    backgroundColor:"white",
    justifyContent:"center",
    alignItems:"center"
  },
  sun: { position: "absolute",
    bottom:0,
    right:0,
    
  },
});
