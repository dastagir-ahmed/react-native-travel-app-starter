import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import reuseable from "./reuseable.Style";
import { COLORS, SIZES } from "../../constants/theme";
import {
  HeightSpacer,
  NetworkImage,
  Rating,
  ReuseableText,
  WidthSpacer,
} from "../../components";
const ReuseableTitle = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={reuseable.rowWithSpace("flex-start")}>
        <NetworkImage
          source={item.imageUrl}
          width={60}
          height={60}
          borderRadius={10}
        />
        <WidthSpacer width={15} />
        <View>
          <ReuseableText
            text={item.title}
            family={"medium"}
            size={SIZES.medium}
            color={COLORS.black}
          />
          <HeightSpacer height={8} />
          <ReuseableText
            text={item.location}
            family={"medium"}
            size={14}
            color={COLORS.gray}
          />
          <HeightSpacer height={8} />
          <View style={reuseable.rowWithSpace("flex-start")}>
            <Rating rating={item.rating} />
            <WidthSpacer width={5} />
            <ReuseableText
              text={` ${item.review} `}
              family={"medium"}
              size={14}
              color={COLORS.gray}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ReuseableTitle;

const styles = StyleSheet.create({
  container: {
    padding: 7,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
  },
});
