import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import welcome from "./screens/welcome";
import dashboard from "./screens/dashboard";
import signup from "./screens/signup";
import login from "./screens/login";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#c6cbef", //Set Drawer background
            width: 250, //Set Drawer width
          },
          headerStyle: {
            backgroundColor: "#f4511e", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      >
        <Drawer.Screen
          name="dashboard"
          options={{
            drawerLabel: "First page Option",
            title: "First Stack",
          }}
          component={<dashboard />}
        />
        <Drawer.Screen
          name="login"
          options={{
            drawerLabel: "Second page Option",
            title: "Second Stack",
          }}
          component={<login />}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

{
  /* <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          options={{ gestureEnabled: false }}
          name="dashboard"
          component={dashboard}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="welcome"
          component={welcome}
        />

        <Stack.Screen name="signup" component={signup} />
        <Stack.Screen name="login" component={login} />
      </Stack.Navigator> */
}
