import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { s, vs } from "react-native-size-matters";

const TabsArr = ["Live", "Record"];

const ACTİVE_BG = "#75563B";
const ACTİVE_TEXT = "#ffff";
const INACTİVE_TEXT = "#2C2016";

const TopTabs = () => {
  const [ActiveTab, SetActiveTab] = useState();
  return (
    <View style={styles.container}>
      {TabsArr.map((Tabname) => {
        const IsActive = ActiveTab === Tabname;
        return (
          <TouchableOpacity
            style={[styles.Tabs, IsActive && { backgroundColor: ACTİVE_BG }]}
            onPress={() => SetActiveTab(Tabname)}
          >
            <Text style={IsActive ? styles.activetext : styles.inactivetext}>
              {Tabname}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TopTabs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F4",
    borderRadius: s(12),
    flexDirection: "row",
    height: vs(48),
    alignItems: "center",
    padding: s(4),
  },

  Tabs: {
    height: vs(32),
    borderRadius: s(8),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  activetext: { fontSize: s(14), fontWeight: "semibold", color: ACTİVE_TEXT },

  inactivetext: { fontSize: s(14), color: INACTİVE_TEXT },
});
