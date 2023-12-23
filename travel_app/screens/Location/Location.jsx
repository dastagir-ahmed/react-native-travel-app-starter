import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Locate from "expo-location";
import MapView, { Marker } from "react-native-maps";

const Location = () => {
  const [coordinate, setCoordinate] = useState({
    latitude: "",
    longitude: "",
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    title: "My Location",
  });
  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    try {
      let { status } = await Locate.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.log("Location permission denied");
        return;
      }

      let location = await Locate.getCurrentPositionAsync({});
      setCoordinate((prev) => ({
        ...prev,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      }));
    } catch (error) {
      console.error("Error getting location:", error);
    }
  };

  return (
    <MapView style={styles.mapStyles} region={coordinate}>
    <Marker coordinate={coordinate} title={coordinate.title} />
  </MapView>
  );
};

export default Location;

const styles = StyleSheet.create({
  mapStyles:{
    ...StyleSheet.absoluteFillObject
  }
});
