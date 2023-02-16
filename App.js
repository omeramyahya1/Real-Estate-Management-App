import * as React from "react";
import { AppRegistry, Button, View, Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { name as appName } from "./app.json";
import "react-native-gesture-handler";
import dashboard from "./screens/dashboard";
import CustomDrawer from "./screens/drawerContent";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="dashboard"
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: "rgba(150, 150, 150, 0.25)",
          drawerActiveTintColor: "#F9F5FF",
          drawerLabelStyle: {
            marginLeft: -16,
            fontSize: 16,
          },
        }}
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen
          name="Home"
          component={dashboard}
          options={{
            drawerIcon: ({ color, size }) => (
              <Image
                source={require("./assets/icons/home.png")}
                name="user-icon"
                style={{ tintColor: color, width: size, height: size }}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => App);
