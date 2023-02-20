import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../firebase";

function CustomDrawer(props) {
  const userName = "Mohamed";

  const handleSignOut = () => {
    auth
      .signOut()

      .catch((error) => alert(error.message));
  };
  return (
    <>
      <DrawerContentScrollView {...props} style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../assets/icons/person.jpg")}
            style={{
              width: 124,
              height: 124,
              borderRadius: "100%",
            }}
          />
          <Text
            style={[
              styles.setColorWhite,
              { fontSize: 16, marginTop: 11, alignSelf: "center" },
            ]}
          >
            {userName}
          </Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Pressable
        onPress={() => {
          console.log("pressed logg out");
          handleSignOut();
        }}
        style={styles.bottomPart}
      >
        <Image
          source={require("../assets/icons/exit.png")}
          style={{
            width: 24,
            height: 24,
            tintColor: "#F9F5FF",
          }}
        />
        <Text style={[styles.setColorWhite, { fontSize: 16, marginLeft: 16 }]}>
          Signout
        </Text>
      </Pressable>
    </>
  );
}

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#28262C",
  },
  header: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 54,
    alignItems: "flex-start",
    width: 124,
  },
  bottomPart: {
    flexDirection: "row",
    backgroundColor: "#28262C",
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: "center",
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
