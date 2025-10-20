import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackButton from '../components/BackButton'
import { s, vs } from 'react-native-size-matters'
import PaymentMethodCard from '../components/PaymentMethodCard'
import PaymentList from '../components/PaymentList'
import BankCardBox from '../components/BankCardBox'
import AddButton from '../components/AddButton'
import TotalText from '../components/TotalText'

const PaymentScreen = () => {
  return (
    <View style={{marginTop:vs(50),flex:1}}>
     
      <View style={{flexDirection:"row",alignItems:"center",marginBottom:vs(37),paddingHorizontal:s(24)}}>
        <BackButton/>
        <Text style={{paddingStart:s(18),color:"#181C2E",fontSize:s(17),fontWeight:"400"}}>Payment</Text>
      </View>
    <PaymentList/>
    <BankCardBox/>
    <AddButton title={"ADD NEW"} bgColor={"#fff"} color={"#FF7622"}/>
    <TotalText/>
    <AddButton title={"PAY & CONFİRM"} bgColor={"#FF7622"} color={"#fff"}/>
    </View>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({})