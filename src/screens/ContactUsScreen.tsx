import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UserAvatar from "../components/UserAvatar";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";
import SocialSection from "../components/SocialSection";

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
        <SocialSection />
        <SocialSection />
        <SocialSection />
        <SocialSection />
        <SocialSection />
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
