import React from 'react'
import { Text, Image, View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Dimensions} from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function APp() {
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>
    <Image source={require('./assets/img/Azalia.png')} />
    <View
    style={styles.addContainer}
    >
    <TouchableOpacity
    style={styles.button}
    >
      <Text
      style={styles.btnText}
      >+</Text>
    </TouchableOpacity>
    </View>
    </View>
      </ScrollView>
    </SafeAreaView>
    
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
    width: width,
  },
  addContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: width-50,
    height: height-100,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    width: 60,
    height: 50,
    borderRadius: 10,
    marginTop: 20,
  },
  btnText: {
    fontSize: 30,
    color: 'white',
  },
});

