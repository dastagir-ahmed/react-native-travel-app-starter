import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES } from "../../constants/theme";

import { HeightSpacer, ReuseableBtn, ReuseableText } from "../index";

const Slides = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View>
      <Image source={item.image} style={styles.image} />
      <View style={styles.stack}>
        <ReuseableText
          text={item.title}
          size={SIZES.xxLarge}
          family={"medium"}
          color={COLORS.white}
        />
        <HeightSpacer height={40} />
        <ReuseableBtn
          onPress={() => navigation.navigate("Bottom")}
          btnText={"get started"}
          width={(SIZES.width - 50) / 2.2}
          backgroundColor={COLORS.red}
          borderColor={COLORS.red}
          borderWidth={0}
          textColor={COLORS.white}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: SIZES.width,
    resizeMode: "cover",
    height: SIZES.height,
  },
  stack: {
    position: "absolute",
    bottom: 0,
    marginBottom: 60,
    marginHorizontal: 20,
  },
});

export default Slides;
