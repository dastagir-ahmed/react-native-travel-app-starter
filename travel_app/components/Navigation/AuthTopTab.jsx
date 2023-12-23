import { View, Text, ScrollView } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { COLORS } from "../../constants/theme";
import AssetImage from "../Reuseable/AssetImage";
import HeightSpacer from "../Reuseable/HeightSpacer";
import { Registration, Signin } from "../../screens";

const Tab = createMaterialTopTabNavigator();

const AuthTopTab = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <HeightSpacer height={60} />
        <AssetImage
          mode={"contain"}
          width={"100%"}
          height={200}
          data={require("../../assets/images/bg1.png")}
        />
        <View style={{height:700}}>
          <Tab.Navigator>
            <Tab.Screen name="Signin" component={Signin} />
            <Tab.Screen name="Register" component={Registration} />
          </Tab.Navigator>
        </View>
      </ScrollView>
    </View>
  );
};

export default AuthTopTab;
