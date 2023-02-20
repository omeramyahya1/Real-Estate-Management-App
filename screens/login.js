import {
  StyleSheet,
  Text,
  View,
  Pressable,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../firebase";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTogglePasswordVisibility } from "../src/hooks/useTogglePasswordVisibility";

const login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const handleSignIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        navigation.replace("dashboard");
        console.log("New user:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView style={styles.container}>
          <View style={styles.hero}>
            <Text
              style={[
                {
                  fontSize: 32,
                  fontWeight: "700",
                },
                styles.setColorBlue,
              ]}
            >
              Login
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputField}>
              <Text style={styles.setColorGrey}>Email</Text>
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
              />
            </View>
            <View style={[styles.inputField]}>
              <Text style={styles.setColorGrey}>Passwrod</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TextInput
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  style={styles.input}
                  secureTextEntry={passwordVisibility}
                />
                <Pressable onPress={handlePasswordVisibility}>
                  <MaterialCommunityIcons
                    name={rightIcon}
                    size={22}
                    color="#232323"
                  />
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleSignIn}
              style={[styles.button, styles.shadowProps]}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttomPart}>
            <TouchableOpacity>
              <Text style={[styles.link]}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F9F5FF",
  },
  hero: {
    flex: 2,
    flexDirection: "column",
    width: "77%",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingBottom: 100,
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
