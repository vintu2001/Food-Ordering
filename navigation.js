import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import RestaurantDetails from "./screens/RestaurantDetails";
import { Provider as ReduxProvider } from "react-redux";

import configureStore from "./redux/store";
import OrderCompleted from "./screens/OrderCompleted";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import BrowseScreen from "./screens/BrowseScreen";

import OrdersScreen from "./screens/OrdersScreen";
import ProfileScreen from "./screens/ProfileScreen";

const store = configureStore();

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};
export const RootNavigation = ({ user }) => {
  return (
    <ReduxProvider store={store}>
      {user ? (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={screenOptions}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
              name="RestaurantDetails"
              component={RestaurantDetails}
            />
            <Stack.Screen name="Browse" component={BrowseScreen} />

            <Stack.Screen name="Orders" component={OrdersScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={screenOptions}
          >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </ReduxProvider>
  );
};
