import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState } from "react";
import PaymentMethodCard from "./PaymentMethodCard";
import { CashIcon, Mastercard, PayPAL, VİSA } from "../assets/icons";
import { s, vs } from "react-native-size-matters";

const PaymentMethods = [
  {
    label: "Cash",
    icon: <CashIcon />,
  },
  { label: "Visa", icon: <VİSA /> },
  { label: "Mastercard", icon: <Mastercard /> },
  { label: "Paypal", icon: <PayPAL /> },
];

const PaymentList = () => {
  const [selectedCard, SetSelectedCard] = useState("");
  return (
    <View>
      <FlatList
        data={PaymentMethods}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <PaymentMethodCard
            icon={item.icon}
            title={item.label}
            onPress={() => SetSelectedCard(item.label)}
            isSelected={selectedCard === item.label}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: s(16),
          paddingHorizontal: s(16),
          paddingTop: vs(10),
        }}
      />
    </View>
  );
};

export default PaymentList;

const styles = StyleSheet.create({});
