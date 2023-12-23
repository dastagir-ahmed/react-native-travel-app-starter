import { StyleSheet, View } from "react-native";
import React from "react";
import {
  AssetImage,
  HeightSpacer,
  ReuseableBtn,
  ReuseableText,
} from "../../components";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import ReuseableTitle from "../../components/Reuseable/ReuseableTitle";

const Failed = () => {
  const hotel = {
    _id: "64c674d23cfa5e847bcd5430",
    country_id: "64c62bfc65af9f8c969a8d04",
    title: "Seaside Resort",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg",
    rating: 4.9,
    review: "1204 Reviews",
    location: "Miami Beach, FL",
  };
  return (
    <View>
      <View style={{ marginTop: "20%" }}>
        <AssetImage
          mode={"contain"}
          width={"100%"}
          height={200}
          data={require("../../assets/images/Falied.png")}
        />
        <HeightSpacer height={40} />
        <View style={{ alignItems: "center" }}>
          <ReuseableText
            family={"medium"}
            size={TEXT.large}
            color={COLORS.black}
            text={"Booking Failed"}
          />
          <HeightSpacer height={20} />
          <ReuseableText
            family={"regular"}
            size={SIZES.medium}
            color={COLORS.gray}
            text={"You can find your booking details below"}
          />
          <HeightSpacer height={20} />
        </View>
        <View style={{ margin: 20 }}>
          <ReuseableText
            family={"bold"}
            size={SIZES.medium}
            color={COLORS.dark}
            text={"Room Details"}
          />
          <HeightSpacer height={20} />
          <ReuseableTitle item={hotel} />
          <HeightSpacer height={20} />
          <ReuseableBtn
            borderColor={COLORS.lightRed}
            borderWidth={1}
            backgroundColor={COLORS.red}
            textColor={COLORS.white}
            btnText={"Try again"}
            width={SIZES.width - 50}
            onPress={() => navigation.navigate("Bottom")}
          />
        </View>
      </View>
    </View>
  );
};

export default Failed;

const styles = StyleSheet.create({});
