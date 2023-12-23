import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import reuseable from "../Reuseable/reuseable.Style";
import ReuseableText from "../Reuseable/ReuseableText";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import { Feather } from "@expo/vector-icons";
import ReuseableTitle from "../Reuseable/ReuseableTitle";

const Recommendation = () => {
  const navigation = useNavigation();
  const recommendations = [
    {
      _id: "64c631650298a05640539adc",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Walt Disney World",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/731e1f89-c028-43ef-97ee-8beabde696b6-vinci_01_disney.jpg",
      rating: 4.7,
      review: "1204 Reviews",
      location: "U.S.A new york",
    },
    {
      _id: "64d062a3de20d7c932f1f70a",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Statue of Liberty",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/c3a8b882-b176-47f0-aec5-a0a49bf42fcd-statue-of-liberty-1.webp",
      rating: 4.8,
      review: "1452 Reviews",
      location: "U.S.A new york",
    },
    {
      _id: "64d09e3f364e1c37c8b4b13c",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Golden Gate Bridge",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/7b7b76aa-bbe0-4ca4-b52f-e2b82afa3a77-Golden-Gate-Bridge-San-Francisco.webp",
      rating: 4.6,
      review: "2145 Reviews",
      location: "U.S.A new york",
    },
    {
      _id: "64d09f90364e1c37c8b4b140",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Yellowstone National Park",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/f3f44363-f250-4002-88a8-19fe79169cc7-geyser-yelowstone-burst_h.webp",
      rating: 4.8,
      review: "24455 Reviews",
      location: "U.S.A new york",
    },
    {
      _id: "64d30f789d008909fa8b7ce5",
      country_id: "64d2fd32618522e2fb342eec",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/f3f44363-f250-4002-88a8-19fe79169cc7-geyser-yelowstone-burst_h.webp",
      title: "Yellowstone National Park",
      rating: 4.8,
      review: "24455 Reviews",
      location: "U.S.A new york",
    },
  ];

  return (
    <View style={styles.container}>
      <View
        style={[reuseable.rowWithSpace("space-between"), { paddingBottom: 10, paddingHorizontal:10 }]}
      >
        <ReuseableText
          text={"Recommendations"}
          family={"medium"}
          size={TEXT.medium}
          color={COLORS.black}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Recommended")}>
          <Feather name="list" size={20} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={recommendations}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: SIZES.medium }}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <ReuseableTitle
            item={item}
            onPress={() => navigation.navigate("PlaceDetails", item._id)}
          />
        )}
      />
    </View>
  );
};

export default Recommendation;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});
