import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants/theme'

const ReuseableBtn = ({onPress, textColor, btnText, width, backgroundColor, borderWidth, borderColor}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnStyle(width, backgroundColor, borderWidth, borderColor)}>
      <Text style={styles.btnText(textColor)}>{btnText}</Text>
    </TouchableOpacity> 
  )
}

export default ReuseableBtn

const styles = StyleSheet.create({
    btnText:(color) =>({
        fontFamily:"medium",
        fontSize:SIZES.medium,
        color
    }),
    btnStyle:(width, backgroundColor, borderWidth, borderColor) =>({
        width,
        backgroundColor,
        borderWidth,
        borderColor,
        alignItems:"center",
        justifyContent:"center",
        height:45,
        borderRadius:SIZES.small
    })
})