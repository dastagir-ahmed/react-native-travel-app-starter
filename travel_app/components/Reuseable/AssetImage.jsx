import { Image, StyleSheet } from "react-native";
import React from "react";

const AssetImage = ({ width, height, mode, data }) => {
  return <Image source={data} style={styles.image(width, height, mode)} />;
};

export default AssetImage;

const styles = StyleSheet.create({
  image: (width, height, mode) => ({
    width,
    height,
    resizeMode: mode,
  }),
});
