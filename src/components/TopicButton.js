import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TopicButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 100,
    borderRadius: 10,
    paddingVertical: 0,
    paddingHorizontal: 10,
    backgroundColor: global.color,
    borderColor: global.color3,
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
    color: global.text,
    textAlign: "center",
    justifyContent: "center",
  },
});