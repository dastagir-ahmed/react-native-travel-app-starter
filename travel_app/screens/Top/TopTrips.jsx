import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ReuseableTitle from "../../components/Reuseable/ReuseableTitle";
import { COLORS } from "../../constants/theme";
import reuseable from "../../components/Reuseable/reuseable.Style";

const TopTrips = () => {
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
    <View style={{margin:20, marginBottom:70}}>
       <FlatList
        data={recommendations}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: COLORS.lightWhite,
              marginBottom: 10,
              borderRadius: 16,
            }}
          >
            <ReuseableTitle item={item} />
            <View style={reuseable.rowWithSpace("space-between")}></View>
          </View>
        )}
      />
      
    </View>
  );
};

export default TopTrips;

