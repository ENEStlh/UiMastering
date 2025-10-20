import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC, ReactNode } from "react";
import { CashIcon } from "../assets/icons";
import { s, vs } from "react-native-size-matters";
import Entypo from '@expo/vector-icons/Entypo';
interface PaymentMethodCardProps {isSelected?:boolean;
    title:string;icon:ReactNode;onPress?:()=>void

}
const PaymentMethodCard:FC<PaymentMethodCardProps> = ({ isSelected = false,title,icon ,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ width: s(85) }}>
      {isSelected && <View style={styles.checkMarkContainer}><Entypo name="check" size={18} color="#fff" /> </View>}
      <View style={[styles.card, isSelected && styles.selected]}>
        {icon}
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PaymentMethodCard;

const styles = StyleSheet.create({
  card: {
    height: vs(72),
    width: s(85),
    backgroundColor: "#F0F5FA",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: s(10),
  },
  text: {
    color: "#464E57",
    marginTop: vs(4),
    fontSize: s(14),
    textAlign: "center",
  },
  selected: {
    backgroundColor: "#fff",
    borderWidth: s(2),
    borderColor: "#FF7622",
  },
  checkMarkContainer:{width:s(24),height:s(24),borderRadius:s(12),backgroundColor:"#FF7622",position:"absolute"
    ,zIndex:1,right:s(-8),top:s(-8),borderWidth:s(2),borderColor:"#fff",alignItems:"center",justifyContent:"center"
  }
});
