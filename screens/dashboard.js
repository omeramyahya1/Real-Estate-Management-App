import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import Card from "./components/card";

const DATA = [
  {
    id: 0,
    location: "Dubai, Business bay",
    price: "750,000",
    image: require("../assets/icons/aptm-1.jpg"),
    status: "Rented",
  },
  {
    id: 1,
    location: "Dubai, JBR",
    price: "500,000",
    image: require("../assets/icons/aptm-2.jpg"),
    status: "Sold",
  },
  {
    id: 2,
    location: "Dubai, International City",
    price: "750,000",
    image: require("../assets/icons/aptm-3.jpg"),
    status: "Rented",
  },
  {
    id: 3,
    location: "Dubai, JVC",
    price: "850,000",
    image: require("../assets/icons/aptm-4.jpg"),
    status: "Rented",
  },
];

const dashboard = () => {
  const userName = "Mohamed";
  const location = "Dubai, UAE";
  const navigation = useNavigation();

  const [menu, setMenu] = useState(false);
  const handleMenue = () => {
    navigation.toggleDrawer();
    setMenu(!menu);
  };
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("welcome");
      })
      .catch((error) => alert(error.message));
  };

  StatusBar.setBarStyle("dark-content", true);
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.hero, styles.heroShadowProps]}>
        <View style={styles.mostTop}>
          <Pressable onPress={handleMenue}>
            <Image
              source={require("../assets/icons/menu.png")}
              style={{
                width: 29,
                height: 29,
                marginTop: 20,
                marginLeft: 20,
                tintColor: "#2B2E4D",
              }}
            />
          </Pressable>
          <Pressable onPress={handleMenue}>
            <Image
              source={require("../assets/icons/person.jpg")}
              style={{
                width: 49,
                height: 49,
                borderRadius: "50%",
                marginTop: 10,
                marginRight: 17,
              }}
            />
          </Pressable>
        </View>
        <View style={styles.greetingsLocation}>
          <View style={styles.location}>
            <Image
              source={require("../assets/icons/pin.png")}
              style={{
                width: 11,
                height: 12,
                marginRight: 7,
                tintColor: "#28262C",
              }}
            />
            <Text
              style={[
                styles.setColorDark,
                {
                  fontSize: 12,
                },
              ]}
            >
              {location}
            </Text>
          </View>
          <View style={styles.greetings}>
            <Text style={[styles.setColorDark, { fontSize: 16 }]}>
              Welcome back, {userName}!
            </Text>
          </View>
        </View>
      </View>

      <FlatList
        style={styles.cardsContainer}
        contentContainerStyle={{
          alignItems: "center",
          overflow: "scroll",
        }}
        data={DATA}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback style={styles.card}>
            <Card
              status={item.status}
              location={item.location}
              price={item.price}
              image={item.image}
            />
          </TouchableWithoutFeedback>
        )}
        onEndReachedThreshold={0}
      />
    </SafeAreaView>
  );
};

export default dashboard;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    height: "100%",
  },
  hero: {
    width: "100%",
    height: 156,
    backgroundColor: "#F9F5FF",
  },
  mostTop: {
    flexDirection: "row",
    width: "100%",
    height: 59,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  greetingsLocation: { marginHorizontal: 20, marginTop: 23 },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  greetings: {
    marginTop: 14,
  },
  cardsContainer: {
    paddingTop: 20,
    height: "100%",
    width: "100%",
    flexGrow: 0,
  },
  card: {
    alignSelf: "center",
  },
  inputContainer: {
    flex: 1,
    width: "77%",
    justifyContent: "center",
  },
  inputField: {
    width: "100%",
  },
  input: {
    width: "100%",
    borderBottomColor: "#969696",
    borderBottomWidth: 1.5,
    marginBottom: 32,
    marginTop: 20,
  },
  buttonContainer: {
    flex: 0.5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#3B3F65",
    width: "100%",
    height: 65,
    padding: 15,
    borderRadius: 65,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttomPart: {
    flex: 1,
    width: "77%",
    justifyContent: "center",
    alignItems: "center",
  },
  link: { textDecorationLine: "underline", fontSize: 10, color: "#1766FF" },
  heroShadowProps: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    elevation: 1,
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
