import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/core";

const accountSettings = () => {
  const userName = "Mohamed";
  const userPic = require("../assets/icons/person.jpg");
  const navigation = useNavigation();
  const [menu, setMenu] = useState(false);
  const handleMenue = () => {
    navigation.toggleDrawer();
    setMenu(!menu);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.mostTop}>
          <Pressable onPress={handleMenue}>
            <Image
              source={require("../assets/icons/menu.png")}
              style={{
                width: 29,
                height: 29,
                marginLeft: 20,
                tintColor: "#2B2E4D",
                alignSelf: "flex-start",
              }}
            />
          </Pressable>
          <Text
            style={[styles.setColorDark, { fontSize: 16, fontWeight: "700" }]}
          >
            Account Settings
          </Text>
          <Text style={{ width: 29, height: 29, marginRight: 20 }}></Text>
        </View>
        <ScrollView style={styles.contentContainer}>
          <View style={styles.hero}>
            <Image
              source={userPic}
              style={{
                width: 100,
                height: 100,
                borderRadius: "100%",
              }}
            />
            <Text
              style={[
                styles.setColorGrey,
                {
                  fontSize: 16,
                },
              ]}
            >
              {userName}
            </Text>
          </View>
          <View style={styles.settingsSection}>
            <View style={styles.optContainer}>
              <Text
                style={[styles.setColorGrey, { marginLeft: 20, fontSize: 16 }]}
              >
                Account
              </Text>
              <TouchableOpacity style={styles.opt} activeOpacity={0.3}>
                <Text
                  style={[
                    styles.setColorGrey,
                    {
                      fontSize: 16,
                    },
                  ]}
                >
                  Change password
                </Text>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={24}
                  color="#969696"
                />
              </TouchableOpacity>
              <View style={styles.hLine} />
              <TouchableOpacity style={styles.opt} activeOpacity={0.3}>
                <Text
                  style={[
                    styles.setColorGrey,
                    {
                      fontSize: 16,
                    },
                  ]}
                >
                  Recovery email
                </Text>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={24}
                  color="#969696"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.optContainer}>
              <Text
                style={[styles.setColorGrey, { marginLeft: 20, fontSize: 16 }]}
              >
                Email
              </Text>
              <TouchableOpacity style={styles.opt} activeOpacity={0.3}>
                <Text
                  style={[
                    styles.setColorGrey,
                    {
                      fontSize: 16,
                    },
                  ]}
                >
                  Change eamil
                </Text>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={24}
                  color="#969696"
                />
              </TouchableOpacity>
            </View>

            <View style={[styles.optContainer]}>
              <TouchableOpacity
                style={[styles.opt, { marginTop: 25 }]}
                activeOpacity={0.3}
              >
                <Text
                  style={[
                    styles.setColorRed,
                    {
                      fontSize: 16,
                    },
                  ]}
                >
                  Delete account
                </Text>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={24}
                  color="#969696"
                />
              </TouchableOpacity>
              <Text
                style={[
                  styles.setColorGrey,
                  {
                    fontSize: 12,
                    marginHorizontal: 20,
                    marginTop: 5,
                  },
                ]}
              >
                This will permanently delete your account and all of its data.
                You will not be able to reactivate this account.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default accountSettings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  mostTop: {
    flexDirection: "row",
    width: "100%",
    height: 59,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
  },
  contentContainer: {
    height: "100%",
    backgroundColor: "#F9F5FF",
    width: "100%",
  },
  hero: {
    width: 100,
    height: 150,
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  optContainer: { marginTop: 15 },
  opt: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 45,
    backgroundColor: "#FFF",
  },
  hLine: {
    borderBottomColor: "rgba(150, 150, 150, 0.25)",
    borderBottomWidth: 1,
  },
  hLine: {
    borderBottomColor: "rgba(150, 150, 150, 0.25)",
    borderBottomWidth: 1,
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
