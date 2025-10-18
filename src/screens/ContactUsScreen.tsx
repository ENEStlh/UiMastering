import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UserAvatar from "../components/UserAvatar";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";
import SocialSection from "../components/SocialSection";
import{FontAwesome5,FontAwesome6,AntDesign,Entypo,Fontisto} from "@expo/vector-icons"



const ContactUsScreen = () => {
  return (
    <View style={{ marginTop: vs(50), paddingHorizontal: s(17) }}>
      <View style={styles.header}>
        <BackButton />
        <UserAvatar />
      </View>
      <Text style={styles.contact}>Contact Us</Text>
      <View style={styles.socialsec}>
        <Text style={styles.title}>Social Media Platforms</Text>
        <SocialSection icon={<FontAwesome6 name="whatsapp" size={24} color="#00A2F3" />} title="WhatsApp" />
        <SocialSection icon={<AntDesign name="x" size={24} color="#00A2F3" />} title="X"/>
        <SocialSection icon={<Entypo name="instagram" size={24} color="#00A2F3" />} title="Instagram" />
        <SocialSection icon={<Fontisto name="snapchat" size={24} color="#00A2F3" />} title="Snapchat"/>
        <SocialSection icon={<FontAwesome5 name="tiktok" size={24} color="#00A2F3" />} title="TikTok" />
      </View>
    </View>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  header: { flexDirection: "row", justifyContent: "space-between" },

  socialsec: {
    backgroundColor: "#F5F5FA",
    borderRadius: s(14),
    paddingHorizontal: s(18),
    paddingVertical: vs(15),
    marginTop: vs(22),
  },

  title: {
    fontSize: s(16),
    fontWeight: "semibold",
    fontFamily: "IBM Plex Sans Arabic",
    color: "#000",
  },
  contact: {
    fontSize: s(22),
    fontWeight: "bold",
    marginTop: vs(20),
    marginStart: s(19),
  },
});
