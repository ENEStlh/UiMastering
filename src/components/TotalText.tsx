import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';

const TotalText = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:"#A0A5BA",fontSize:s(14),fontWeight:"400",paddingRight:s(20)}}>TotalText:</Text>
      <Text style={{fontSize:s(30)}}>$ 96</Text>
    </View>
  )
}

export default TotalText;

const styles = StyleSheet.create({
    container:{flexDirection:"row",marginHorizontal:s(16), marginTop:vs(10),alignItems:"center"}
})