import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import About from "../Components/Map";
import Contact from "../Components/Contact";
import Search from "../Components/Search";
import CustomDrawer from "../Components/CustomDrawer";
import BottomNavbar from "./BottomNavbar";
import MaterialCommunityIcons from'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from  'react-native-vector-icons/Fontisto';

const Drawer = createDrawerNavigator();

const DrawerNavigation = ()=>{
    return(
        <>

                

            <Drawer.Navigator drawerContent={(props)=><CustomDrawer {...props}/>} screenOptions={{drawerActiveTintColor : 'black' , drawerInactiveTintColor : 'gray'}}>
                <Drawer.Screen name="Profile" component={BottomNavbar} options={{
                    drawerIcon : ({color})=>(
                        <MaterialCommunityIcons name="account" color={color} size={30}/>
                    )
                }} />
                <Drawer.Screen name="About" component={About} options={{
                    drawerIcon :({color})=>(
                        <Octicons name="stack" size={30} color={color} />
                    )
                }} />
                <Drawer.Screen name="Contact" component={Contact} options={{
                    drawerIcon :({color})=>(
                        <AntDesign name="contacts" size={30} color={color} />
                    )
                }}/>
                <Drawer.Screen name="Search" component={Search} options={{
                    drawerIcon : ({color})=>(
                        <Fontisto name="search" size={30} color={color} />
                    )
                }}/>
                
            </Drawer.Navigator>
        </>
    )
}
export default DrawerNavigation;