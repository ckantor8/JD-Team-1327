import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MainButton({ text, onPress, txtColor }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Back to Topics</Text>
      </View>
    </TouchableOpacity>
  );
}
MainButton.defaultProps = {
  color: "black"
}
const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 100,
    borderRadius: 10,
    paddingVertical: 0,
    paddingHorizontal: 10,
    backgroundColor: "ivory",
    borderColor: "lightgray",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset : { width: 0, height: 4},
    elevation: 7.5,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontStyle: "normal",
    fontSize: 14,
    color: "black",
    textAlign: "center",
    justifyContent: "center",
  },
});