import { StyleSheet, Text, View,FlatList} from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import TopTabs from "../components/TopTabs";
import MeditationCard from "../components/MeditationCard";
import { dummyData } from "../data/data";

const MeditationScreen = () => {
  return (
    <View style={{ paddingTop: vs(70), paddingHorizontal: s(16) }}>
      <Text
        style={{ fontSize: s(22), fontWeight: "semibold", marginBottom: vs(6) }}
      >
        Meditations
      </Text>
      <Text style={{ color: "#2C2016", fontSize: s(14), marginBottom: vs(16) }}>
        Lorem Ipsum is simply dummy text
      </Text>

      <TopTabs />
      

      <FlatList
      data={dummyData}
      keyExtractor={item=>item.id}
      renderItem={({item})=> <MeditationCard imageURL={item.image} title={item.title} date={item.date}   />}
        contentContainerStyle={{paddingBottom:s(150),paddingTop:vs(24)}}
        showsVerticalScrollIndicator={false}
        numColumns={2} 
        columnWrapperStyle={{paddingBottom:s(16), justifyContent:"space-around"}}  />
      



    </View>
  );
};

export default MeditationScreen;

const styles = StyleSheet.create({});
