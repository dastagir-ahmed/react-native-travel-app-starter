import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
    profile: {
        position: "absolute",
        right: 0,
        left: 0,
        top: 110,
        alignItems: "center",
    },
    image: {
        resizeMode: "cover",
        borderRadius: 90,
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: COLORS.white,
    },
    backgroundImage: {
        width: "100%",
        height: 300,
    },
    name: {
        backgroundColor: COLORS.lightBlue,
        borderRadius: 12,
        padding:10
    },
});

export default styles;
