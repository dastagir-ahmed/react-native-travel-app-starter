import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
} from "react-native";
import React from "react";
import AppBar from "../../components/Reuseable/AppBar";
import { COLORS } from "../../constants/theme";
import ReuseableTitle from "../../components/Reuseable/ReuseableTitle";

import { useNavigation } from "@react-navigation/native";
const Recommended = () => {
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
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <View style={{ height: 40 }}>
        <AppBar
          color={COLORS.white}
          color1={COLORS.white}
          icon={"search1"}
          title={"Recommendations"}
          onPress={() => navigation.goBack()}
          onPress1={() => navigation.navigate("Search")}
          top={10}
          left={0}
          right={0}
        />
      </View>
      <View style={{ paddingTop: 15, marginTop: 30 }}>
        <FlatList
          data={recommendations}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 9 }}>
              <ReuseableTitle
                item={item}
                onPress={() => navigation.navigate("PlaceDetails", item._id)}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Recommended;

const styles = StyleSheet.create({});
