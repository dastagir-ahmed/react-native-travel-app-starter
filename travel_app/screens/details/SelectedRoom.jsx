import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { useRoute } from "@react-navigation/native";
import { COLORS, SIZES } from "../../constants/theme";
import {
  AppBar,
  AssetImage,
  Counter,
  HeightSpacer,
  NetworkImage,
  Rating,
  ReuseableBtn,
  ReuseableText,
  WidthSpacer,
} from "../../components";
import reuseable from "../../components/Reuseable/reuseable.Style";

const SelectedRoom = ({ navigation }) => {
  const router = useRoute();
  const { item } = router.params;
  console.log(item);
  return (
    <View>
      <View style={{ height: 80 }}>
        <AppBar
          top={30}
          title={item.title}
          color={COLORS.white}
          left={20}
          right={20}
          onPress={() => navigation.goBack()}
          drop={true}
        />
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <View style={{ backgroundColor: COLORS.white, borderRadius: 16 }}>
          <NetworkImage
            source={item.imageUrl}
            width={"100%"}
            height={200}
            borderRadius={16}
          />
          <HeightSpacer height={20} />
          <View style={{ marginHorizontal: 10 }}>
            <View style={reuseable.rowWithSpace("space-between")}>
              <ReuseableText
                family={"medium"}
                text={item.title}
                size={SIZES.medium}
                color={COLORS.black}
              />
              <View style={reuseable.rowWithSpace("flex-start")}>
                <Rating rating={item.rating} />
                <WidthSpacer width={5} />
                <ReuseableText
                  family="regular"
                  size={SIZES.small}
                  color={COLORS.gray}
                  text={`(${item.review})`}
                />
              </View>
            </View>
            <HeightSpacer height={10} />
            <ReuseableText
              family="regular"
              size={SIZES.small}
              color={COLORS.gray}
              text={item.location}
            />
            <HeightSpacer height={20} />
            <View
              style={{
                borderWidth: 0.5,
                borderColor: COLORS.lightGrey,
                width: "100%",
              }}
            />
            <HeightSpacer height={10} />
            <ReuseableText
              family="medium"
              size={SIZES.medium}
              color={COLORS.dark}
              text={"Room Requirements"}
            />
            <HeightSpacer height={20} />
            <View style={reuseable.rowWithSpace("space-between")}>
              <ReuseableText
                family="regular"
                size={SIZES.medium}
                color={COLORS.dark}
                text={"Price per night"}
              />
              <ReuseableText
                family="regular"
                size={SIZES.medium}
                color={COLORS.dark}
                text={" $ 400"}
              />
            </View>
            <HeightSpacer height={10} />
            <View style={reuseable.rowWithSpace("space-between")}>
              <ReuseableText
                family="regular"
                size={SIZES.medium}
                color={COLORS.dark}
                text={"Payment Method"}
              />
              <View style={reuseable.rowWithSpace("flex-start")}>
                <AssetImage
                  mode={"contain"}
                  width={30}
                  height={20}
                  data={require("../../assets/images/Visa.png")}
                />
                <ReuseableText
                  family="regular"
                  size={SIZES.medium}
                  color={COLORS.dark}
                  text={"Visa"}
                />
              </View>
            </View>
            <HeightSpacer height={10} />
            <View style={reuseable.rowWithSpace("space-between")}>
              <ReuseableText
                family="regular"
                size={SIZES.medium}
                color={COLORS.dark}
                text={"4 Guest"}
              />
              <Counter />
            </View>
            <HeightSpacer height={30} />
            <View style={{ marginHorizontal: 10 }}>
              <ReuseableBtn
                borderRadius={12}
                borderWidth={1}
                borderColor={COLORS.green}
                width={SIZES.width - 50}
                backgroundColor={COLORS.green}
                btnText={"Book Room"}
                textColor={COLORS.white}
                onPress={() => navigation.navigate("Successful")}
              />
            </View>
            <HeightSpacer height={30} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SelectedRoom;

const styles = StyleSheet.create({});
