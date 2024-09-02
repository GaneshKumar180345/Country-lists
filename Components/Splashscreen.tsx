import React from "react";
import { Image, StyleSheet, View } from "react-native";



const style = StyleSheet.create({
    image : {
        width : 420,
        height : 900
    }
})

const Splashscreen = ()=>{
    return(
        <>
        <View>
            <Image style={style.image} source={require('../Assests/splash.jpg')}/>
        </View>
        </>
    )
}
export default Splashscreen;