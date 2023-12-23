import {
  SafeAreaView,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import reuseable from "../../components/Reuseable/reuseable.Style";
import styles from "./search.style";
import { COLORS } from "../../constants/theme";
import { Feather } from "@expo/vector-icons";
import { AppBar, HeightSpacer } from "../../components";
import ReuseableTitle from "../../components/Reuseable/ReuseableTitle";
import HotelCard from "../../components/Tiles/Hotel/HotelCard";
const HotelSearch = ({ navigation }) => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResult, setSearchResult] = useState([]);
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
    <SafeAreaView>
      <View style={{ height: 70 }}>
        <AppBar
          color={COLORS.white}
          color1={COLORS.white}
          icon={"filter"}
          title={"Look for hotels"}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
          top={40}
          left={20}
          right={20}
          drop={true}
        />
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.input}
            placeholder="where do you want to stay"
            value={searchKey}
            onChangeText={setSearchKey}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Feather name="search" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>
      {hotels.length === 0 ? (
        <View>
          <HeightSpacer height={"20%"} />
          <Image
            source={require("../../assets/images/search.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <View style={{ paddingRight: 10 }}>
          <FlatList
            data={hotels}
            numColumns={2}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <HotelCard
                item={item}
                margin={8}
                onPress={() => navigation.navigate("HotelDetails", item._id)}
              />
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default HotelSearch;
