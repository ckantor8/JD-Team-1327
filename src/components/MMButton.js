import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function MMButton({ text, onPress, txtColor }) {
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={onPress}>
        <Image source={require("../assets/media.png")} style={styles.icon}></Image>
      </TouchableOpacity>
    </View>
  );
}
MMButton.defaultProps = {
  color: "black"
}
const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: "rgba(196,196,196,1)",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset : { width: 0, height: 4},
    elevation: 7.5,
    marginLeft: 20,
    marginRight: 80,
    marginBottom: 70,
  },
  buttonText: {
    fontStyle: "normal",
    fontSize: 32,
    color: "black",
    textAlign: "center",
    justifyContent: "center",
  },
  icon: {
    height: 33,
    width: 36,
  }
});