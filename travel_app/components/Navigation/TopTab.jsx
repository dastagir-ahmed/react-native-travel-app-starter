import { Image, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TopBookings, TopInfo, TopTrips } from "../../screens";
import { COLORS, SIZES } from "../../constants/theme";

import AppBar from "../Reuseable/AppBar";
import styles from "./TopTab.style";
import HeightSpacer from "../Reuseable/HeightSpacer";
import ReuseableText from "../Reuseable/ReuseableText";

const Tab = createMaterialTopTabNavigator();
const TopTab = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: COLORS.lightWhite }}>
        <View>
          <Image
            source={require("../../assets/images/profile.jpg")}
            style={styles.backgroundImage}
          />
          <AppBar
            top={40}
            left={20}
            right={20}
            color={COLORS.white}
            icon={"logout"}
            color1={COLORS.white}
            onPress1={() => {}}
          />
          <View style={styles.profile}>
            <Image
              source={require("../../assets/images/avatar.jpg")}
              style={styles.image}
            />
            <HeightSpacer height={5} />

            <View style={{ alignItems: "center" }}>
              <ReuseableText
                text="Okechukwu"
                family="medium"
                size={SIZES.medium}
                color={COLORS.white}
              />
            </View>
            <HeightSpacer height={5} />
            <View style={styles.name}>
              <View style={{ alignItems: "center" }}>
                <ReuseableText
                  text="example@gmail.com"
                  family="medium"
                  size={SIZES.medium}
                  color={COLORS.white}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Bookings" component={TopBookings} />
        <Tab.Screen name="Trips" component={TopTrips} />
        <Tab.Screen name="Info" component={TopInfo} />
      </Tab.Navigator>
    </View>
  );
};
//https://d326fntlu7tble.cloudfront.net/uploads/c87b6dfb-ee4b-47fa-9c02-6ccca2893a6f-vinci_06.jpg

export default TopTab;
