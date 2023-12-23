import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    searchContainer: {
        borderColor: COLORS.lightBlue,
        height: 50,
        borderRadius: 15,
        marginHorizontal: SIZES.medium,
        marginVertical: SIZES.medium,
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        fontFamily: "regular",
        width: "100%",
        height: "100%",
        paddingHorizontal: 20,
    },
    searchWrapper: {
        flex: 1,
        borderRadius: SIZES.small,
        marginRight: SIZES.small,
    },
    searchBtn: {
        backgroundColor: COLORS.blue,
        height: "100%",
        borderRadius: SIZES.small,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    searchImage: {
        width: "100%",
        height:SIZES.height/2.2,
        resizeMode: "contain",
        borderRadius: SIZES.small,
        paddingHorizontal:20
    },
    tile:{
        marginHorizontal:12,
        marginBottom:10
    }
});
export default styles;
