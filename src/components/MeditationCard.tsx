import { ImageBackground, StyleSheet, Text, View,Dimensions } from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import { Camera } from "../assets/icons";


const PHONE_WİDTH=Dimensions.get("window").width;
const CARD_WİDTH=(PHONE_WİDTH-s(16)*3)/2;

interface MeditationCardProps {imageURL:string;title:string;date:string}


const MeditationCard:FC<MeditationCardProps> = ({imageURL,title,date}) => {
  return (
    <ImageBackground
      source={{
        uri: imageURL,
      }}
      style={styles.ImageCard}
      imageStyle={styles.image}
    >
      <View style={styles.overlay} />
      <View style={styles.liveCard}>
        <Text style={styles.LiveText}>Live</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.MedText}>{title}</Text>
        <View style={styles.card}>
          <Camera />
          <Text style={styles.text1}>{date}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MeditationCard;

const styles = StyleSheet.create({
  ImageCard: {
    height: vs(150),
    width: CARD_WİDTH,
    borderRadius: s(12),
    overflow: "hidden",
     
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
