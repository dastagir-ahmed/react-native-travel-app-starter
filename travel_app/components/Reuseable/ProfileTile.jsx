import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";
import reuseable from "./reuseable.Style";
import { AntDesign } from "@expo/vector-icons";
import ReuseableText from "./ReuseableText";
import WidthSpacer from "./WidthSpace";

const ProfileTile = ({ onPress, icon, title }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.tile}>
        <View style={reuseable.rowWithSpace("space-between")}>
          <View style={reuseable.rowWithSpace("flex-start")}>
            <View >
              <AntDesign name={icon} size={20} />
            </View>
              <WidthSpacer width={15} />
            <ReuseableText
              family={"medium"}
              text={title}
              color={COLORS.gray}
              size={SIZES.small}
            />
          </View>
          <AntDesign name="right" size={20} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileTile;

const styles = StyleSheet.create({
  tile: {
    backgroundColor: COLORS.white,
    width: "100%",
    borderRadius: 10,
    height: 40,
    justifyContent: "center",
    padding:10,
    marginBottom:10
  },
});
