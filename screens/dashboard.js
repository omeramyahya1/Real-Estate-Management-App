import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import React from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";

const dashboard = () => {
  const userName = "Mohamed";
  const location = "Dubai, UAE";
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("welcome");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.hero}>
          <View style={styles.mostTop}>
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
              <Text>Welcome back, {userName}!</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F9F5FF",
  },
  hero: {
    width: "100%",
    height: 156,
    backgroundColor: "#cbcbcb",
  },
  mostTop: {
    backgroundColor: "pink",
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
    width: "77%",
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
  shadowProps: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
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

{
  /* <View style={styles.container}>
      <Text>
        Email{"\n"} {auth.currentUser?.email}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View> */
}
