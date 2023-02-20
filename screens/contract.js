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
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { useToggleFav } from "../src/hooks/useToggleFav";
import SelectDropdown from "react-native-select-dropdown";

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

const contract = ({ route }) => {
  const navigation = useNavigation();
  const params = route.params.state;
  const data = DATA.filter((item) => item.id === params.id)[0];
  const contract_pdf = require("../assets/icons/contract_dubai.png");
  const id_card = require("../assets/icons/IDCard.webp");
  const checkque_1 = require("../assets/icons/citi-bank-1.jpg");
  const checkque_2 = require("../assets/icons/emirates_ndb.jpg");

  const { heart, handleLove } = useToggleFav();
  const payments = ["First payement", "Second payment", "Third payment"];
  const [paymentIndex, setPaymentIndex] = useState(0);

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

            <View style={styles.conractData}>
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
                  source={contract_pdf}
                  style={{
                    width: 110,
                    height: 152,
                    borderRadius: 5,
                  }}
                />
              </TouchableOpacity>
              <View
                style={[
                  styles.vLine,
                  {
                    marginHorizontal: 20,
                  },
                ]}
              />
              <View style={styles.textContainer}>
                <View style={styles.textRow}>
                  <Text style={[styles.setColorDark, { fontWeight: "bold" }]}>
                    Issue date
                  </Text>
                  <Text style={styles.setColorDark}>Jan 23rd 2023</Text>
                </View>
                <View style={styles.textRow}>
                  <Text style={[styles.setColorDark, { fontWeight: "bold" }]}>
                    Exp. date
                  </Text>
                  <Text style={styles.setColorDark}>Jan 23rd 2024</Text>
                </View>
                <View style={styles.textRow}>
                  <Text style={[styles.setColorDark, { fontWeight: "bold" }]}>
                    Office/Broker
                  </Text>
                  <Text style={styles.setColorDark}>Shoba RE.</Text>
                </View>
                <View style={styles.textRow}>
                  <Text style={[styles.setColorDark, { fontWeight: "bold" }]}>
                    Owner
                  </Text>
                  <Text style={styles.setColorDark}>Mr. Shalhoub</Text>
                </View>
              </View>
            </View>

            <View style={styles.hLine} />

            <View style={styles.idDocs}>
              <View style={{ alignItems: "center" }}>
                <Text
                  style={[
                    styles.setColorDark,
                    {
                      fontWeight: "600",
                      marginBottom: 10,
                    },
                  ]}
                >
                  Landlord
                </Text>
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
                    source={id_card}
                    style={{
                      width: 132,
                      height: 82,
                      borderRadius: 5,
                    }}
                  />
                </TouchableOpacity>
              </View>

              <View
                style={[
                  styles.vLine,
                  {
                    marginHorizontal: 20,
                  },
                ]}
              />
              <View style={{ alignItems: "center" }}>
                <Text
                  style={[
                    styles.setColorDark,
                    {
                      fontWeight: "600",
                      marginBottom: 10,
                    },
                  ]}
                >
                  Tenant
                </Text>
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
                    source={id_card}
                    style={{
                      width: 132,
                      height: 82,
                      borderRadius: 5,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.hLine} />

            <View style={styles.paymentSection}>
              <View>
                <Text
                  style={[
                    styles.setColorDark,
                    { fontSize: 28, fontWeight: "500" },
                  ]}
                >
                  Payment plan
                </Text>
              </View>
              <View style={[styles.dropDownSelector, styles.shadowProps]}>
                <SelectDropdown
                  data={payments}
                  defaultValueByIndex={0}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    setPaymentIndex(index);
                    return selectedItem;
                  }}
                  buttonStyle={styles.selectButton}
                  buttonTextStyle={styles.setColorDark}
                  dropdownStyle={styles.dropMenu}
                  rowTextStyle={styles.setColorDark}
                  renderDropdownIcon={() => {
                    return (
                      <MaterialCommunityIcons
                        name="chevron-down"
                        size={24}
                        color="#28262c"
                      />
                    );
                  }}
                />
              </View>

              <View>
                <Text
                  style={[
                    styles.setColorDark,
                    { fontSize: 18, fontWeight: "500", marginBottom: 20 },
                  ]}
                >
                  {payments[paymentIndex]}
                </Text>
              </View>

              <View style={styles.payementPlan}>
                <View style={styles.paymentSegment}>
                  <View style={styles.textContainer}>
                    <View style={styles.textRow}>
                      <Text
                        style={[styles.setColorDark, { fontWeight: "bold" }]}
                      >
                        Date
                      </Text>
                      <Text style={styles.setColorDark}>Jan 23rd 2023</Text>
                    </View>
                    <View style={styles.textRow}>
                      <Text
                        style={[styles.setColorDark, { fontWeight: "bold" }]}
                      >
                        Bank name
                      </Text>
                      <Text style={styles.setColorDark}>CitiBank</Text>
                    </View>
                    <View style={styles.textRow}>
                      <Text
                        style={[styles.setColorDark, { fontWeight: "bold" }]}
                      >
                        From/To
                      </Text>
                      <Text style={styles.setColorDark}>Tenant/Landlord</Text>
                    </View>
                  </View>
                  <View style={[styles.shadowProps]}>
                    <TouchableOpacity>
                      <Image
                        source={checkque_1}
                        style={{
                          width: 120,
                          height: 50,
                          borderRadius: 5,
                          borderWidth: StyleSheet.hairlineWidth,
                          borderColor: "rgba(0, 0, 0, 0.25)",
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.paymentSegment}>
                  <View style={styles.textContainer}>
                    <View style={styles.textRow}>
                      <Text
                        style={[styles.setColorDark, { fontWeight: "bold" }]}
                      >
                        Date
                      </Text>
                      <Text style={styles.setColorDark}>Jan 23rd 2023</Text>
                    </View>
                    <View style={styles.textRow}>
                      <Text
                        style={[styles.setColorDark, { fontWeight: "bold" }]}
                      >
                        Bank name
                      </Text>
                      <Text style={styles.setColorDark}>EmiratesNDB</Text>
                    </View>
                    <View style={styles.textRow}>
                      <Text
                        style={[styles.setColorDark, { fontWeight: "bold" }]}
                      >
                        From/To
                      </Text>
                      <Text style={styles.setColorDark}>Tenant/Landlord</Text>
                    </View>
                  </View>
                  <View style={[styles.shadowProps]}>
                    <TouchableOpacity>
                      <Image
                        source={checkque_2}
                        style={{
                          width: 120,
                          height: 50,
                          borderRadius: 5,
                          borderWidth: StyleSheet.hairlineWidth,
                          borderColor: "rgba(0, 0, 0, 0.25)",
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default contract;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#FFF",
    height: "100%",
  },
  greetingsLocation: {
    flexGrow: 1,
    overflow: "scroll",
    marginHorizontal: 20,
    paddingTop: 0,
  },
  location: {
    marginTop: 23,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  },
  conractData: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  vLine: {
    height: "85%",
    borderColor: "rgba(150, 150, 150, 0.25)",
    borderWidth: 0.5,
    transform: [{ rotate: "180deg" }],
  },
  textContainer: {
    justifyContent: "space-evenly",
  },
  textRow: {
    width: 180,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  idDocs: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  paymentSection: {
    marginVertical: 20,
  },
  dropDownSelector: {
    marginVertical: 20,
  },
  selectButton: {
    borderRadius: 15,
    backgroundColor: "rgba(249, 245, 255, 0.75)",
  },
  dropMenu: {
    backgroundColor: "rgb(249, 245, 255)",
    borderRadius: 15,
  },
  paymentSegment: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
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
