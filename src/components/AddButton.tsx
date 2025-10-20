import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import Entypo from '@expo/vector-icons/Entypo';

const AddButton = ({title,bgColor,color}) => {
  return (
    <TouchableOpacity style={[styles.container,{backgroundColor:bgColor}]}>
        <Entypo name="plus" size={24} color="#FF7622" />
      <Text style={{color:color,fontSize:s(14),fontWeight:"700"}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff",
    borderWidth: s(2),
    borderRadius: s(10),
    borderColor: "#F0F5FA",
    paddingVertical:vs(22),
    justifyContent:"center",
    alignItems:"center",
    marginTop:vs(15),
    marginHorizontal:s(16),
    flexDirection:"row"
  },
});
