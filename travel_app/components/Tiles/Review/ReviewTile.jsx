import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./review.style";
import reuseable from "../../Reuseable/reuseable.Style";
import NetworkImage from "../../Reuseable/NetworkImage";
import WidthSpacer from "../../Reuseable/WidthSpace";
import ReuseableText from "../../Reuseable/ReuseableText";
import { COLORS, SIZES } from "../../../constants/theme";
import Rating from "../../Reuseable/Rating";
import DescriptionText from "../../Reuseable/DescriptionText";

const ReviewTile = ({ review }) => {
  return (
    <View style={styles.reviewBorder}>
      <View style={reuseable.rowWithSpace("space-between")}>
        <View style={reuseable.rowWithSpace("flex-start")}>
          <NetworkImage
            source={review.user.profile}
            width={54}
            height={54}
            borderRadius={10}
          />
          <WidthSpacer width={20} />
          <View style={{width:"80%"}}>
            <View style={reuseable.rowWithSpace("space-between")}>
              <ReuseableText
                text={review.user.username}
                family={"medium"}
                size={SIZES.small + 2}
                color={COLORS.black}
              />
              <WidthSpacer width={"30%"} />
              <View style={reuseable.rowWithSpace("space-between")}>
                <Rating rating={review.rating} />
                <WidthSpacer width={10} />
                <ReuseableText
                  text={review.updatedAt}
                  family={"medium"}
                  size={SIZES.small + 2}
                  color={COLORS.black}
                />
              </View>
            </View>
            <DescriptionText text={ review.review} lines={2} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReviewTile;
