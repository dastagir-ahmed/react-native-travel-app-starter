import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES, TEXT } from "../../../constants/theme";
import {
  HeightSpacer,
  NetworkImage,
  Rating,
  ReuseableText,
} from "../../../components";

const HotelCard = ({ margin, item, onPress }) => {
  return (
    <TouchableOpacity style={styles.card(margin)} onPress={onPress}>
      <View style={styles.imageContainer}>
    

        <NetworkImage
          source={item.imageUrl}
          width={"100%"}
          height={"100%"}
          borderRadius={16}
          bottom={true}
          />
       
        <HeightSpacer height={5} />
        <View style={{ padding: 10 }}>
          <ReuseableText
            family={"medium"}
            text={item.title}
            size={SIZES.medium}
            color={COLORS.black}
          />
          <HeightSpacer height={5} />
          <ReuseableText
            family={"medium"}
            text={item.location}
            size={SIZES.medium}
            color={COLORS.gray}
          />
          <HeightSpacer height={5} />
          <Rating rating={item.rating} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HotelCard;

const styles = StyleSheet.create({
  card: (margin) => ({
    width: SIZES.width / 2.2,
    height: 250,
    borderRadius: 16,
    backgroundColor: COLORS.lightWhite,
    margin: margin,
  }),
  imageContainer: {
    alignItems: "center",
  marginTop:0,
    height: 120,
  },
});
