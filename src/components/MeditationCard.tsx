import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { Camera } from "../assets/icons";

const MeditationCard = () => {
  return (
    <ImageBackground
      source={{
        uri: "data:image/jpeg;base64,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",
      }}
      style={styles.ImageCard}
      imageStyle={styles.image}
    >
      <View style={styles.overlay} />
      <View style={styles.liveCard}>
        <Text style={styles.LiveText}>Live</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.MedText}>Meditations</Text>
        <View style={styles.card}>
          <Camera />
          <Text style={styles.text1}>31st Jan - 09:00 am</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MeditationCard;

const styles = StyleSheet.create({
  ImageCard: {
    height: vs(161),
    width: s(166),
    borderRadius: s(12),
    overflow: "hidden",
    marginTop: vs(24),
  },
  bottom: { position: "absolute", bottom: s(10), left: s(10) },

  MedText: { color: "#ffffffff", fontSize: s(12), fontWeight: "600" },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.30)",
  },
  card: { paddingTop: vs(7), flexDirection: "row", alignItems: "center" },

  text1: { color: "#fff", paddingLeft: s(7) },
  liveCard: {
    backgroundColor: "#E41111",
    height: vs(22),
    width: s(39),
    borderRadius: s(90),
    position: "absolute",
    right: s(5.5),
    top: vs(6),
    justifyContent: "center",
    alignItems: "center",
  },
  LiveText:{color:"#ffff",fontSize:s(11),fontWeight:"600"},
  image:{width:"100%",height:"100%"}
});
