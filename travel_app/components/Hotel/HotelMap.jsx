import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";

const HotelMap = ({ coordinates }) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <MapView style={styles.maps} region={coordinates}>
        <Marker coordinate={coordinates} title={coordinates.title} />
      </MapView>
    </TouchableOpacity>
  );
};

export default HotelMap;

const styles = StyleSheet.create({
  maps: {
    marginVertical: 10,
    height: 120,
    width: "100%",
    borderRadius: 12,
  },
});
