import { StyleSheet, StatusBar, Platform } from "react-native";

const reuseable = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    rowWithSpace: (justifyContent) => ({
        flexDirection: "row",
        alignItems: "center",
        justifyContent: justifyContent,
    }),
});

export default reuseable;
