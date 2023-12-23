import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import {
  DescriptionText,
  HeightSpacer,
  NetworkImage,
  PopularList,
  ReuseableBtn,
  ReuseableText,
} from "../../components";
import AppBar from "../../components/Reuseable/AppBar";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import reuseable from "../../components/Reuseable/reuseable.Style";
import { Feather } from "@expo/vector-icons";
const CountryDetails = ({ navigation }) => {
  const route = useRoute();

  const item = route.params;
  const country = {
    _id: "64c62bfc65af9f8c969a8d04",
    country: "USA",
    description:
      "The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/1bcdbbd0-d702-475d-92ea-d9171c041674-vinci_01_places_new_york.jpg",
    popular: [
      {
        _id: "64c631650298a05640539adc",
        title: "Walt Disney World",
        imageUrl:
          "https://d326fntlu7tb1e.cloudfront.net/uploads/731e1f89-c028-43ef-97ee-8beabde696b6-vinci_01_disney.jpg",
        rating: 4.7,
        review: "1204 Reviews",
        location: "Orlando, USA",
      },
      {
        _id: "64d062a3de20d7c932f1f70a",
        title: "Statue of Liberty",
        imageUrl:
          "https://d326fntlu7tb1e.cloudfront.net/uploads/c3a8b882-b176-47f0-aec5-a0a49bf42fcd-statue-of-liberty-1.webp",
        rating: 4.8,
        review: "1452 Reviews",
        location: "Liberty Island, New York Harbor",
      },
    ],
    region: "North America, USA",
  };

  return (
    <ScrollView>
      <View>
        <NetworkImage
          source={country.imageUrl}
          width={"100%"}
          height={350}
          borderRadius={0}
          
        />
        <AppBar
          color={COLORS.white}
          color1={COLORS.white}
          icon={"search1"}
          title={country.country}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
          top={40}
          left={20}
          right={20}
          drop={true}
        />
      </View>
      <View style={styles.description}>
        <ReuseableText
          family={"medium"}
          text={country.region}
          size={TEXT.large}
          color={COLORS.black}
        />
        <DescriptionText text={country.description} />
        <View style={{ alignContent: "center" }}>
          <HeightSpacer height={15} />
          <View style={reuseable.rowWithSpace("space-between")}>
            <ReuseableText
              family={"medium"}
              text={"Popular Destinations"}
              size={TEXT.large}
              color={COLORS.black}
            />
            <TouchableOpacity onPress={() => {}}>
              <Feather name="list" size={20} />
            </TouchableOpacity>
          </View>
          <HeightSpacer height={15} />
          <PopularList data={country.popular} />
          <ReuseableBtn
            onPress={() => navigation.navigate("HotelSearch")}
            btnText={"Find Best Hotel"}
            width={SIZES.width - 40}
            backgroundColor={COLORS.green}
            borderColor={COLORS.green}
            borderWidth={0}
            textColor={COLORS.white}
          />
          <HeightSpacer height={40} />
        </View>
      </View>
    </ScrollView>
  );
};

export default CountryDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F8",
  },
  description: {
    marginHorizontal: 20,
    paddingTop: 20,
  },
});
