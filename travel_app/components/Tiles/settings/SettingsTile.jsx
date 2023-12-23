import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import reuseable from "../../Reuseable/reuseable.Style";
import { COLORS, TEXT } from "../../../constants/theme";
import ReuseableText from "../../Reuseable/ReuseableText";
import { AntDesign } from "@expo/vector-icons";
import WidthSpacer from "../../Reuseable/WidthSpace";

const SettingsTile = ({ onPress, title1, title }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[reuseable.rowWithSpace("space-between"), styles.container]}
    >
      <ReuseableText
        family={"regular"}
        size={TEXT.medium}
        text={title}
        color={COLORS.dark}
      />
      {title === "Language" ? (
        <View style={reuseable.rowWithSpace("flex-start")}>
          <Image
            source={require("../../../assets/images/USA.png")}
            style={styles.image}
          />
          <WidthSpacer width={5} />
          <ReuseableText
            family={"regular"}
            size={TEXT.medium}
            text={"English"}
            color={COLORS.gray}
          />
          <WidthSpacer width={5} />
          <AntDesign name="right" size={15} color={COLORS.gray} />
        </View>
      ) : (
        <View style={reuseable.rowWithSpace("flex-start")}>
          <ReuseableText
            family={"regular"}
            size={TEXT.medium}
            text={title1}
            color={COLORS.gray}
          />
          <WidthSpacer width={5} />
          <AntDesign name="right" size={15} color={COLORS.gray} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default SettingsTile;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: COLORS.lightGrey,
    paddingVertical: 15,
  },
  image: {
    width: 20,
    height: 20,
  },
});
