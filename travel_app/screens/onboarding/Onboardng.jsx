import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import React from "react";
import Slides from "../../components/onboard/Slides";

const slides = [
  {
    id: 1,
    image: require("../../assets/images/1.png"),
    title: "Find the perfect place to stay",
  },
  {
    id: 2,
    image: require("../../assets/images/2.png"),
    title: "Discover the world",
  },
  {
    id: 3,
    image: require("../../assets/images/3.png"),
    title: "Find the best hotel in the world",
  },
];
const Onboardng = () => {
  return (
    <SafeAreaView>
      <FlatList
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={true}
        data={slides}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Slides item={item} />}
      />
    </SafeAreaView>
  );
};

export default Onboardng;

const styles = StyleSheet.create({});
