import * as React from "react";
import { AppRegistry, Button, View, Image, LogBox } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { name as appName } from "./app.json";
import "react-native-gesture-handler";
import dashboard from "./screens/dashboard";
import CustomDrawer from "./screens/drawerContent";
import accountSettings from "./screens/accountSettings";
import favorites from "./screens/favorites";
import feedback from "./screens/feedback";
import welcome from "./screens/welcome";
import signup from "./screens/signup";
import login from "./screens/login";
import bills from "./screens/bills";
import auth from "./firebase";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

var user = true;

const Auth = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" component={welcome} />

      <Stack.Screen name="signup" component={signup} />
      <Stack.Screen name="login" component={login} />
    </Stack.Navigator>
  );
};

const Dashboard = () => {
  return (
    <Drawer.Navigator
      initialRouteName="dashboard"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "rgba(150, 150, 150, 0.25)",
        drawerActiveTintColor: "#F9F5FF",
        drawerInactiveTintColor: "#F9F5FF",
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
              style={{ tintColor: color, width: size, height: size }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Account Settings"
        component={accountSettings}
        options={{
          drawerIcon: ({ color, size }) => (
            <Image
              source={require("./assets/icons/user.png")}
              style={{ tintColor: color, width: size, height: size }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={favorites}
        options={{
          drawerIcon: ({ color, size }) => (
            <Image
              source={require("./assets/icons/heart.png")}
              style={{ tintColor: color, width: size, height: size }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Give us feedback"
        component={feedback}
        options={{
          drawerIcon: ({ color, size }) => (
            <Image
              source={require("./assets/icons/text_bubble.png")}
              style={{ tintColor: color, width: size, height: size }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      {user ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="dashboard" component={Dashboard} />
          <Stack.Screen name="bills" component={bills} />
        </Stack.Navigator>
      ) : (
        <Auth />
      )}
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => App);
