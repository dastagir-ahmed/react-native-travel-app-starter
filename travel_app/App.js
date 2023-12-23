import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CountryDetails,
  Failed,
  HotelDetails,
  HotelList,
  HotelSearch,
  Onboardng,
  Payments,
  PlaceDetails,
  Recommended,
  Registration,
  Search,
  SelectRoom,
  SelectedRoom,
  Settings,
  Signin,
  Succcessful,
} from "./screens";
import BottomTabNavigation from "./components/Navigation/BottomTabNavigation";

const Stack = createNativeStackNavigator();

export default function App() {
  const [FontsLoaded] = useFonts({
    regular: require("./assets/fonts/regular.otf"),
    medium: require("./assets/fonts/medium.otf"),
    bold: require("./assets/fonts/bold.otf"),
    light: require("./assets/fonts/light.otf"),
    xtrabold: require("./assets/fonts/xtrabold.otf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (FontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [FontsLoaded]);
  if (!FontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboard"
          component={Onboardng}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Bottom"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CountryDetails"
          component={CountryDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Recommended"
          component={Recommended}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PlaceDetails"
          component={PlaceDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HotelDetails"
          component={HotelDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HotelList"
          component={HotelList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HotelSearch"
          component={HotelSearch}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectRoom"
          component={SelectRoom}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Payments"
          component={Payments}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Successful"
          component={Succcessful}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Failed"
          component={Failed}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectedRoom"
          component={SelectedRoom}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
