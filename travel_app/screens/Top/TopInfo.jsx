import { View, Text } from "react-native";
import React from "react";
import { ProfileTile } from "../../components";

const TopInfo = ({ navigation }) => {
  return (
    <View style={{ margin: 20 }}>
      <ProfileTile
        onPress={() => navigation.navigate("")}
        icon={"user"}
        title={"Personal information"}
      />
      <ProfileTile
        onPress={() => navigation.navigate("Payments")}
        icon={"creditcard"}
        title={"Payments"}
      />
      <ProfileTile
        onPress={() => navigation.navigate("Settings")}
        icon={"setting"}
        title={"Settings"}
      />
    </View>
  );
};

export default TopInfo;
