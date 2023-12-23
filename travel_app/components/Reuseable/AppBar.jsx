import {
  StyleSheet,
  TouchableOpacity,
  View,
  StatusBar,
  Platform,
} from "react-native";
import React from "react";
import reuseable from "./reuseable.Style";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, TEXT } from "../../constants/theme";
import ReuseableText from "./ReuseableText";

const AppBar = ({
  color,
  color1,
  title,
  icon,
  onPress,
  onPress1,
  top,
  left,
  right,
  drop
}) => {
  return (
    <View style={styles.overlay(top, left, right, drop)}>
      <View style={reuseable.rowWithSpace("space-between")}>
        <TouchableOpacity style={styles.box(color)} onPress={onPress}>
          <AntDesign name="left" size={20} />
        </TouchableOpacity>
        <ReuseableText
          text={title}
          family={"medium"}
          size={TEXT.medium}
          color={COLORS.black}
        />
        <TouchableOpacity style={styles.box1(color1)} onPress={onPress1}>
          <AntDesign name={icon} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  overlay: (top, left, right,drop) => ({
    position: "absolute",
    top,
    left,
    right,
    justifyContent: "center",
    marginTop:!drop && Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }),
  box: (color) => ({
    backgroundColor: color,
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  }),
  box1: (color1) => ({
    backgroundColor: color1,
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  }),
});
