import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

const Card = ({ image, status, price, location }) => {
  return (
    <View style={[styles.container, styles.shadowProps]}>
      <View style={styles.upper}>
        <ImageBackground
          source={image}
          style={{
            width: "100%",
            height: "100%",
          }}
          resizeMethod="center"
          imageStyle={{
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        >
          <LinearGradient
            style={styles.linearGredient}
            colors={["transparent", "rgba(0, 0, 0, 0.7)"]}
            start={{ x: 0.5, y: 0.6 }}
          >
            <View
              style={{
                borderColor: "#F9F5FF",
                width: 90,
                height: 30,

                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                borderWidth: 1,

                margin: 15,
              }}
            >
              <Text
                style={[
                  styles.setColorWhite,
                  {
                    fontSize: 16,
                  },
                ]}
              >
                {status}
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>

      <View style={styles.lower}>
        <View style={styles.location}>
          <Image
            source={require("../../assets/icons/pin.png")}
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
                fontSize: 14,
              },
            ]}
          >
            {location}
          </Text>
        </View>
        <Text style={{ color: "#208A0F", fontSize: 16, marginTop: 10 }}>
          AED {price}
        </Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    height: 320,
    borderRadius: 15,
    marginBottom: 50,
  },
  upper: {
    borderRadius: 15,
    flex: 3,
  },
  linearGredient: {
    height: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: "flex-end",
  },
  lower: {
    flex: 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingLeft: 20,

    backgroundColor: "white",
    justifyContent: "center",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  shadowProps: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,

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
