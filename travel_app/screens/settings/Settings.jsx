import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";
import {
  AppBar,
  HeightSpacer,
  ReuseableText,
  SettingsTile,
} from "../../components";

const Settings = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: COLORS.lightWhite, flex: 1 }}>
      <View style={{ height: 100 }}>
        <AppBar
          color={COLORS.white}
          onPress={() => navigation.goBack()}
          top={15}
          left={20}
          right={20}
        />
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <ReuseableText
          family={"regular"}
          size={SIZES.large}
          color={COLORS.black}
          text={"Account Settings"}
        />
        <SettingsTile title="Language" />
        <HeightSpacer height={3} />
        <SettingsTile title="Country" title1="USA" />
        <HeightSpacer height={3} />
        <SettingsTile title="Currency" title1="USD" />
        <HeightSpacer height={20} />
        <ReuseableText
          family={"regular"}
          size={SIZES.large}
          color={COLORS.black}
          text={"Support"}
        />
        <SettingsTile title="Get Help" />
        <HeightSpacer height={3} />
        <SettingsTile title="Give a feedback" />
        <HeightSpacer height={20} />
        <ReuseableText
          family={"regular"}
          size={SIZES.large}
          color={COLORS.black}
          text={"Legal"}
        />
        <SettingsTile title="Term of Service" />
        <HeightSpacer height={3} />
        <SettingsTile title="Privacy Policy" />
        <HeightSpacer height={10} />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
