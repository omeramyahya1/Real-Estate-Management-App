import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { useToggleFav } from "../src/hooks/useToggleFav";

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

const bills = ({ route }) => {
  const navigation = useNavigation();
  const params = route.params.state;
  const data = DATA.filter((item) => item.id === params.id)[0];
  const dewa_bill = require("../assets/icons/DEWA_bill_1.jpg");
  const gas_bill = require("../assets/icons/gas_bill.jpg");
  const etisalat_bill = require("../assets/icons/Etisalat_bill.webp");

  const { heart, handleLove } = useToggleFav();

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={[styles.greetingsLocation, { width: "100%" }]}>
          <View style={styles.upper}>
            <ImageBackground
              source={data.image}
              style={{
                width: "100%",
                height: 266,
              }}
              resizeMethod="center"
              imageStyle={{}}
            >
              <LinearGradient
                style={styles.linearGredient}
                colors={["transparent", "rgba(0, 0, 0, 0.7)"]}
                start={{ x: 0.5, y: 0.6 }}
              >
                <TouchableOpacity
                  style={{
                    width: 50,
                    height: 50,
                    marginLeft: 20,
                    backgroundColor: "rgba(249, 245, 255, 0.75)",
                    borderRadius: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    navigation.navigate("dashboard");
                  }}
                >
                  <Image
                    source={require("../assets/icons/back.png")}
                    style={{
                      width: 34,
                      height: 34,
                      tintColor: "#28262C",
                      borderRadius: "100%",
                    }}
                  />
                </TouchableOpacity>
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
                    {data.status}
                  </Text>
                </View>
              </LinearGradient>
            </ImageBackground>
          </View>

          <View style={{ marginHorizontal: 20 }}>
            <View style={styles.location}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../assets/icons/pin.png")}
                  style={{
                    width: 14,
                    height: 14,
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
                  {data.location}
                </Text>
              </View>
              <TouchableWithoutFeedback
                onPress={() => {
                  handleLove();
                }}
              >
                <View
                  style={{
                    width: 35,
                    height: 35,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name={heart}
                    size={24}
                    color="#FF4C4C"
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View>
              <Text
                style={{
                  color: "#208A0F",
                  fontSize: 18,
                  marginTop: 10,
                  marginLeft: 7,
                }}
              >
                AED {data.price}
              </Text>
            </View>
            <View style={styles.specs}>
              <View
                style={{
                  flexDirection: "column",

                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  paddingHorizontal: 7,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <Image
                    style={{
                      width: 14,
                      height: 14,
                      marginRight: 7,

                      tintColor: "#3B3F65",
                    }}
                    source={require("../assets/icons/bed.png")}
                  />
                  <Text
                    style={[
                      styles.setColorDark,
                      {
                        fontSize: 14,
                      },
                    ]}
                  >
                    3 Bed Rooms
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{
                      width: 14,
                      height: 14,
                      marginRight: 7,
                      tintColor: "#3B3F65",
                    }}
                    source={require("../assets/icons/bounding-box.png")}
                  />
                  <Text
                    style={[
                      styles.setColorDark,
                      {
                        fontSize: 14,
                      },
                    ]}
                  >
                    250m sq
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "column",

                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  paddingHorizontal: 7,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <Image
                    style={{
                      width: 14,
                      height: 14,
                      marginRight: 7,

                      tintColor: "#3B3F65",
                    }}
                    source={require("../assets/icons/tub.png")}
                  />
                  <Text
                    style={[
                      styles.setColorDark,
                      {
                        fontSize: 14,
                      },
                    ]}
                  >
                    3 Bath Rooms
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{
                      width: 14,
                      height: 14,
                      marginRight: 7,
                      tintColor: "#3B3F65",
                    }}
                    source={require("../assets/icons/car.png")}
                  />
                  <Text
                    style={[
                      styles.setColorDark,
                      {
                        fontSize: 14,
                      },
                    ]}
                  >
                    Garage
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.hLine} />

            <View style={styles.billsContainer}>
              <View style={styles.BCRow}>
                <View style={styles.bill}>
                  <TouchableOpacity
                    style={[
                      styles.shadowProps,
                      {
                        borderWidth: StyleSheet.hairlineWidth,
                        borderColor: "rgba(0, 0, 0, 0.25)",
                        borderRadius: 5,
                      },
                    ]}
                  >
                    <Image
                      source={dewa_bill}
                      style={{
                        width: 110,
                        height: 152,
                        borderRadius: 5,
                      }}
                    />
                  </TouchableOpacity>
                  <Text
                    style={[
                      styles.setColorDark,
                      {
                        fontSize: 16,
                        fontWeight: "600",
                        marginTop: 10,
                      },
                    ]}
                  >
                    Dewa Bill
                  </Text>
                </View>
                <View style={styles.bill}>
                  <TouchableOpacity
                    style={[
                      styles.shadowProps,
                      {
                        borderWidth: StyleSheet.hairlineWidth,
                        borderColor: "rgba(0, 0, 0, 0.25)",
                        borderRadius: 5,
                      },
                    ]}
                  >
                    <Image
                      source={gas_bill}
                      style={{
                        width: 110,
                        height: 152,
                        borderRadius: 5,
                      }}
                    />
                  </TouchableOpacity>
                  <Text
                    style={[
                      styles.setColorDark,
                      {
                        fontSize: 16,
                        fontWeight: "600",
                        marginTop: 10,
                      },
                    ]}
                  >
                    Gas Bill
                  </Text>
                </View>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 50,
                  marginLeft: 30,
                }}
              >
                <View style={styles.bill}>
                  <TouchableOpacity
                    style={[
                      styles.shadowProps,
                      {
                        borderWidth: StyleSheet.hairlineWidth,
                        borderColor: "rgba(0, 0, 0, 0.25)",
                        borderRadius: 5,
                      },
                    ]}
                  >
                    <Image
                      source={etisalat_bill}
                      style={{
                        width: 110,
                        height: 152,
                        borderRadius: 5,
                      }}
                    />
                  </TouchableOpacity>
                  <Text
                    style={[
                      styles.setColorDark,
                      {
                        fontSize: 16,
                        fontWeight: "600",
                        marginTop: 10,
                      },
                    ]}
                  >
                    Etisalat Bill
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default bills;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#FFF",
    height: "100%",
  },
  greetingsLocation: {
    marginHorizontal: 20,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 23,
  },
  bill: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  linearGredient: {
    height: "100%",
    paddingTop: 30,
    justifyContent: "space-between",
  },
  specs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  hLine: {
    borderBottomColor: "rgba(150, 150, 150, 0.25)",
    borderBottomWidth: 1,
  },billsContainer: {
    marginVertical: 20,
  },
  BCRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  shadowProps: {
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
