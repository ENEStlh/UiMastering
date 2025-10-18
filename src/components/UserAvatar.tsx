import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'

const UserAvatar = () => {
  return (
    <Image 
    source={{uri: "https://img.freepik.com/premium-vektor/sevimli-penguen-cizgi-film-vektor-illustrasyonu_921448-1355.jpg"}}
    style={styles.avatar}
    />
  )
}

export default UserAvatar

const styles = StyleSheet.create({
    avatar:{
        height: s(32),
        width: s(32),
        borderRadius: s(16),
    }
})