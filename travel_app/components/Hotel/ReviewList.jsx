import { FlatList, StyleSheet } from "react-native";
import React from "react";
import ReviewTile from "../Tiles/Review/ReviewTile";

const ReviewList = ({ reviews }) => {
  return (
    <FlatList
      data={reviews}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <View>
          <ReviewTile review={item} /> style={{ marginBottom: 10 }}
        </View>
      )}
    />
  );
};

export default ReviewList;

const styles = StyleSheet.create({});
