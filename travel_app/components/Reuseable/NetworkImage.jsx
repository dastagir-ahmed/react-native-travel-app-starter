import { Image, StyleSheet, View } from "react-native";
import React from "react";

const NetworkImage = ({ source, width, height, borderRadius, bottom }) => {
  return (
    <Image
      source={{ uri: source }}
      style={styles.image(width, height, borderRadius, bottom)}
    />
  );
};

export default NetworkImage;

const styles = StyleSheet.create({
  image: (width, height, borderRadius, bottom) => ({
    width,
    height,
    borderRadius: borderRadius,
    resizeMode: "cover",
    //borderTopRadius:16
    borderBottomLeftRadius: bottom ? 0 : borderRadius,
    borderBottomRightRadius: bottom ? 0 : borderRadius,
  }),
});
