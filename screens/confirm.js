import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function confirm({navigation}) {
    const handlePress = () => {
        navigation.navigate("home");
        console.log("Pressed");
      };
  return (
    <View style={styles.container}>
      <Text>Thanking You For Using Our Service</Text>

      <TouchableOpacity>
          <Text style={{ color: "blue", textDecorationLine: "underline", fontSize:12 }} onPress={handlePress}>Click Here to go back home...</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "space-evenly",
    }
})