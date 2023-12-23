import { StyleSheet, Text, View } from "react-native";
import React from "react";
import reuseable from "./reuseable.Style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import WidthSpacer from "./WidthSpace";
import ReuseableText from "./ReuseableText";

const Rating = ({ rating }) => {
  return (
    <View style={reuseable.rowWithSpace("flex-start")}>
      <MaterialCommunityIcons name="star" size={20} color={"#FD9942"} />
      <WidthSpacer width={5} />
      <ReuseableText
        text={rating}
        family={"medium"}
        size={14}
        color={"#FD9942"}
      />
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({});
