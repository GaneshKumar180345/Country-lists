import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterPage from "../Components/RegisterPage";
import LoginPage from "../Components/LoginPage";
import DrawerNavigation from "./DrawerNavigation";
import CountryList from "../Components/Home";
import About from "../Components/Map";
import CustomDrawer from "../Components/CustomDrawer";





const stack = createNativeStackNavigator();
const HomeNavigation = ()=>{
    return(
        <>
        <stack.Navigator initialRouteName="Login" screenOptions={{headerShown : false}}>
            <stack.Screen name="Register" component={RegisterPage}/>
            <stack.Screen name="Login" component={LoginPage}/>
            <stack.Screen name="Drawer" component={DrawerNavigation}/>
            <stack.Screen name="Home" component={CountryList}/>
            <stack.Screen name="Map" component={About}/>
            <stack.Screen name="Custom" component={CustomDrawer}/>
        </stack.Navigator>
        </>
    )
}
export default HomeNavigation;