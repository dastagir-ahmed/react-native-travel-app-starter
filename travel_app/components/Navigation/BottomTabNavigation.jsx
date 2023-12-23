import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Home,
  Profile,
  Chat,
  Location,
  Succcessful,
  Failed,
} from "../../screens";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import TopTab from "./TopTab";
import AuthTopTab from "./AuthTopTab";

const Tab = createBottomTabNavigator();

const tabBarStyle = {
  padding: 20,
  borderRadius: 10,
  height: 60,
  position: "absolute",
  bottom: 7,
  right: 10,
  left: 10,
};
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#EB6A58"
      tabBarHideKeyBoard={true}
      headerShown={false}
      inactiveColor="#3e2465"
      barStyle={{ paddingBottom: 48 }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "grid" : "grid-outline"}
              color={focused ? COLORS.red : COLORS.gray}
              size={20}
              style={{ marginBottom: 15 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "location" : "location-outline"}
              color={focused ? COLORS.red : COLORS.gray}
              size={20}
              style={{ marginBottom: 15 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={AuthTopTab}
        options={{
          tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={
                focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"
              }
              color={focused ? COLORS.red : COLORS.gray}
              size={20}
              style={{ marginBottom: 15 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={TopTab}
        options={{
          tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={focused ? COLORS.red : COLORS.gray}
              size={20}
              style={{ marginBottom: 15 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
