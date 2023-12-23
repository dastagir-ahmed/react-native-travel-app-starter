import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.lightWhite,
    },
    inputWrapper: (borderColor) => ({
        borderColor,
        backgroundColor: COLORS.lightWhite,
        borderWidth: 1,
        height: 40,
        borderRadius: 12,
        flexDirection: "row",
        paddingHorizontal: 15,
        alignItems: "center",
    }),
    wrapper: {
        marginBottom: 15,
    },
    label: {
        marginBottom: 5,
        fontFamily: "regular",
        marginEnd: 5,
        textAlign: "right",
        fontSize: SIZES.small,
    },
    errorMessage: {
        color: COLORS.red,
        fontFamily: "regular",
        marginTop: 3,
        marginLeft: 5,
        fontSize: SIZES.small,
    },
});

export default styles;
