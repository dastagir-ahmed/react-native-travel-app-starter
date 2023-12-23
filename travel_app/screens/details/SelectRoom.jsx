import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppBar, HeightSpacer, ReuseableBtn } from "../../components";
import { COLORS, SIZES } from "../../constants/theme";
import ReuseableTitle from "../../components/Reuseable/ReuseableTitle";
import reuseable from "../../components/Reuseable/reuseable.Style";

const SelectRoom = ({ navigation }) => {
  const hotels = [
    {
      _id: "64c674d23cfa5e847bcd5430",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Seaside Resort",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg",
      rating: 4.9,
      review: "1204 Reviews",
      location: "Miami Beach, FL",
    },
    {
      _id: "64c675183cfa5e847bcd5433",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Mountain Lodge",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
      rating: 4.5,
      review: "12024 Reviews",
      location: "Aspen, CO",
    },
    {
      _id: "64d0b5a4d3cb4985a76ac1aa",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Hotel Alpha",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/28266df3-1578-4d0d-8015-c5480f64a73d-hotel-alpha.jpeg",
      rating: 4.7,
      review: "1204 Reviews",
      location: "City Center, USA",
    },
    {
      _id: "64c675be3cfa5e847bcd5439",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Family-Friendly Resort",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/3e6222dc-6b79-4031-914b-60c220782b72-ff.jpeg",
      rating: 4.6,
      review: "12854 Reviews",
      location: "Orlando, FL",
    },
    {
      _id: "64c67442776ed29f19727fd7",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Luxury Hotel 1",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp",
      rating: 4.7,
      review: "1204 Reviews",
      location: "New York City, NY",
    },
  ];
  return (
    <View style={{ marginBottom: 70 }}>
      <View style={{ height: 80 }}>
        <AppBar
          top={30}
          title={"Select Room"}
          color={COLORS.white}
          left={20}
          right={20}
          onPress={() => navigation.goBack()}
          drop={true}
        />
      </View>
      <FlatList
        data={hotels}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <ReuseableTitle item={item} />
            <View style={{ alignItems: "center" }}>
              <ReuseableBtn
                textColor={COLORS.white}
                backgroundColor={COLORS.green}
                btnText={"Select Room"}
                width={SIZES.width - 50}
                borderWidth={1}
                borderColor={COLORS.green}
                onPress={() => navigation.navigate("SelectedRoom", { item })}
              />
            </View>
            <HeightSpacer height={10} />
          </View>
        )}
      />
      <HeightSpacer height={50} />
    </View>
  );
};

export default SelectRoom;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginBottom: 5,
  },
});
