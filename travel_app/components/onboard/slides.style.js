import { StyleSheet } from "react-native";
import { SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    image:{
        width:SIZES.width,
        resizeMode:"cover",
        height:SIZES.height
    },
    stack:{
     
        position:"absolute",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
        // top:40,
        // marginBottom:60,
        // marginHorizontal:20
    }
    
});