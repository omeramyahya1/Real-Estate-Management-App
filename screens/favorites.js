import { StyleSheet, Text, StatusBar, SafeAreaView } from "react-native";
import React from "react";

const favorites = () => {
  StatusBar.setBarStyle("dark-content", true);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text>Favorites</Text>
      </SafeAreaView>
    </>
  );
};

export default favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  setColorDark: {
    color: "#28262c",
  },
  setColorBlue: {
    color: "#3B3F65",
  },
  setColorGrey: {
    color: "#969696",
  },
  setColorWhite: {
    color: "#F9F5FF",
  },
  setColorRed: {
    color: "#FF4C4C",
  },
});
