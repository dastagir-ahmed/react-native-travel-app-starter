import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ReuseableText = ({ text, family, size, color, align }) => {
  return (
    <View>
      <Text style={styles.textStyle(family, size, color, align)}>{text}</Text>
    </View>
  );
};

export default ReuseableText;

const styles = StyleSheet.create({
  textStyle: (family, size, color, align) => ({
    fontFamily: family,
    fontSize: size,
    color,
    textAlign: align,
  }),
});
