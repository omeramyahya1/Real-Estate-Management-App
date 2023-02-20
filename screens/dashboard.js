import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useToggleFav } from "../src/hooks/useToggleFav";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
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

  const sheetRef = React.useRef(null);
  const [data, setData] = useState("");

  const { heart, handleLove } = useToggleFav();

  const TouchableCard = (props) => {
    return (
      <TouchableOpacity
        id={props.id}
        component={props.component}
        onPress={() => {
          sheetRef.current?.expand();
          setData(DATA.filter((item) => item.id == props.id)[0]);
        }}
      >
        {props.component}
      </TouchableOpacity>
    );
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
          <TouchableCard
            id={item.id}
            component={
              <Card
                status={item.status}
                location={item.location}
                price={item.price}
                image={item.image}
              />
            }
          />
        )}
        onEndReachedThreshold={0}
      />

      <BottomSheet
        ref={sheetRef}
        snapPoints={["100%"]}
        bordrRadius={20}
        index={-1}
        enabledGestureInteraction={false}
        handleStyle={{
          display: "none",
        }}
      >
        <BottomSheetView style={styles.bottomView}>
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
                    sheetRef.current?.close();
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

          <View style={styles.greetingsLocation}>
            <View style={styles.locationBSC}>
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

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("contract", { state: { id: data.id } });
                }}
                style={[styles.button, styles.buttonShadowProps]}
              >
                <Text style={styles.buttonText}>Contract</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("bills", { state: { id: data.id } });
                }}
                style={[styles.button, styles.buttonShadowProps]}
              >
                <Text style={styles.buttonText}>Accounts & Bills</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
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
  linearGredient: {
    height: "100%",
    paddingTop: 30,
    justifyContent: "space-between",
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
