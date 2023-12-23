import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, TEXT } from "../../../constants/theme";
import { HeightSpacer, NetworkImage, ReuseableText } from "../../../components";
import { useNavigation } from "@react-navigation/native";
const Country = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CountryDetails", item)}
    >
      <View>
        <NetworkImage
          source={item.imageUrl}
          width={75}
          height={75}
          borderRadius={10}
        />
        <HeightSpacer height={5} />
        <ReuseableText
          text={item.country}
          family={"medium"}
          size={TEXT.small}
          color={COLORS.black}
          align={"center"}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Country;
