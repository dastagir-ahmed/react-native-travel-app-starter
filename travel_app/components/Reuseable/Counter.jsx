import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useState } from "react";
import reuseable from "./reuseable.Style";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants/theme";
import WidthSpacer from "./WidthSpace";
import ReuseableText from "./ReuseableText";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const Decrement = useCallback(() => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  });
  const Increment = useCallback(() => {
    setCounter(counter + 1);
  });
  return (
    <View style={reuseable.rowWithSpace("flex-start")}>
      <TouchableOpacity onPress={Decrement}>
        <AntDesign name="minussquareo" size={20} color={COLORS.gray} />
      </TouchableOpacity>
      <WidthSpacer width={2} />
      <ReuseableText
        family="regular"
        text={` ${counter} `}
        color={COLORS.gray}
        size={SIZES.medium}
      />
      <WidthSpacer width={5} />
      <TouchableOpacity onPress={Increment}>
        <AntDesign name="plussquareo" size={20} color={COLORS.gray} />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({});
