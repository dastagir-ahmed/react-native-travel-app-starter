import { SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import React from "react";
import reuseable from "../../components/Reuseable/reuseable.Style";
import { HeightSpacer, ReuseableText } from "../../components";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import style from "./home.style";
import Places from "../../components/Home/Places";
import Recommendation from "../../components/Home/Recommendation";
import BestHotels from "../../components/Home/BestHotels";
const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={reuseable.container}>
      <ScrollView>
        <View >
          <View style={[reuseable.rowWithSpace("space-between"),{paddingHorizontal:10}]}>
            <ReuseableText
              text={"Hey User!"}
              family={"medium"}
              size={TEXT.medium}
              color={COLORS.black}
            />
            <TouchableOpacity
              style={style.box}
              onPress={() => navigation.navigate("Search")}
            >
              <AntDesign name="search1" size={22} />
            </TouchableOpacity>
          </View>
          <HeightSpacer height={SIZES.medium} />
          <View style={{paddingHorizontal:10}}>

          <ReuseableText
            text={"Places"}
            family={"medium"}
            size={TEXT.medium}
            color={COLORS.black}
          />
            </View>
          <Places />
          <HeightSpacer height={3} />
          <Recommendation />
          <HeightSpacer height={15} />
          <BestHotels />
        </View>
        <HeightSpacer height={70} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
