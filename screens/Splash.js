import React from 'react'
import { Text, View, Pressable, Image, StyleSheet } from 'react-native'

function Splash() {
  return (
    <View style={styles.container}>
        <Image
        style={styles.logo}
        source={require('../assets/img/Azalia.png')}
        />
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        margin: 20,
    }
})


export default Splash