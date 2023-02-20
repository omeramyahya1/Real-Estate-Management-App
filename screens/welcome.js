import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";

const welcome = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("login");
      }
    });
    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("New user:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleSignUpWithEmail = () => {
    navigation.navigate("signup");
  };

  const handleSignIn = () => {
    navigation.navigate("login");
  };

  StatusBar.setBarStyle("dark-content", true);
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView style={styles.container}>
          <View style={styles.logo}>
            <Text
              style={[
                {
                  fontSize: 36,
                  fontWeight: "600",
                },
                styles.setColorDark,
              ]}
            >
              Logo
            </Text>
            <Text
              style={[
                {
                  fontSize: 16,
                  fontWeight: "300",
                },
                styles.setColorDark,
              ]}
            >
              Ramotion RE
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {}}
              style={[styles.button, styles.shadowProps]}
            >
              <Image
                source={require("../assets/icons/google.png")}
                style={{
                  width: 21,
                  height: 21,
                  marginRight: 25,
                }}
              />
              <Text style={styles.buttonText}>Sign up with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSignUpWithEmail}
              style={[styles.button, styles.buttonOutline, styles.shadowProps]}
            >
              <Text style={styles.buttonOutlineText}>Sign up with Email</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttomPart}>
            <Text
              style={[
                {
                  fontSize: 10,
                  marginTop: 106,
                },
                styles.setColorGrey,
              ]}
            >
              Already have an account?{" "}
            </Text>
            <TouchableOpacity onPress={handleSignIn}>
              <Text
                style={{
                  color: "#1766FF",
                  fontSize: 10,
                  textDecorationLine: "underline",
                }}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F9F5FF",
  },
  logo: {
    flex: 1,
    width: "100%",
    height: 234,
    justifyContent: "flex-end",
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
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    flex: 1,
    width: "77%",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 40,
  },
  buttomPart: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    alignContent: "center",
  },

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
  button: {
    flexDirection: "row",
    backgroundColor: "#3B3F65",
    width: "100%",
    height: 65,
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 14,
    borderColor: "#3B3F65",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#3B3F65",
    fontWeight: "700",
    fontSize: 16,
  },
});
