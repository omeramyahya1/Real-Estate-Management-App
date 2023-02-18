import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import React from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useToggleFav } from "../src/hooks/useToggleFav";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const accountSettings = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Account Settings</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default accountSettings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  linearGredient: {
    height: "100%",
    paddingTop: 30,
    justifyContent: "space-between",
  },
  bottomSheetContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    height: "100%",
  },
  locationBSC: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  specs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  hLine: {
    borderBottomColor: "rgba(150, 150, 150, 0.25)",
    borderBottomWidth: 1,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  button: {
    backgroundColor: "#fff",
    width: "100%",
    height: 65,
    padding: 15,
    marginBottom: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#3B3F65",
    borderWidth: StyleSheet.hairlineWidth,
  },
  buttonText: {
    color: "#28262C",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonShadowProps: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    elevation: 10,
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
