import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import ReuseableTitle from "../Reuseable/ReuseableTitle";
import { useNavigation } from "@react-navigation/native";

const PopularList = ({ data }) => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 10 }}>
      <ReuseableTitle
        item={item}
        onPress={() => navigation.navigate("PlaceDetails", item._id)}
      />
    </View>
  );
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item._id}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
};

export default PopularList;

const styles = StyleSheet.create({});
