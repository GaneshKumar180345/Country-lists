import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "../Navigations/HomeNavigation";




const HomeScreen = ()=>{
    return(
        <>
            <NavigationContainer>
                <HomeNavigation/>
            </NavigationContainer>
        </>
    )
}
export default HomeScreen;