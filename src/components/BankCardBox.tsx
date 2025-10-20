import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import LottieView from "lottie-react-native";

const BankCardBox = () => {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        // ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#F7F8F9",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../assets/credit card.json")}
      />

      <Text
        style={{
          paddingTop: s(10),
          color: "#32343E",
          fontSize: s(16),
          fontWeight: "700",
        }}
      >
        No master card added
      </Text>

      <Text style={{ fontSize: s(15), textAlign: "center" }}>
        You can add a mastercard and save it for later
      </Text>
    </View>
  );
};

export default BankCardBox;

const styles = StyleSheet.create({
  container: {
    height: s(257),
    backgroundColor: "#F7F8F9",
    borderRadius: s(10),
    marginHorizontal: s(16),
    marginTop: vs(10),
    justifyContent: "center",
    alignItems: "center",
  },
});
