import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Components/Home";
import About from "../Components/Map";
import Contact from "../Components/Contact";
import Search from "../Components/Search";
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { ActivityIndicator, StyleSheet, View } from "react-native";


const bottomnavbar = createBottomTabNavigator();

const BottomNavbar = ({navigation}:any)=>{

    const [loading , setLoading ] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(true)
        },2000)
    },[])

    return(
        <>
        {loading ? <bottomnavbar.Navigator screenOptions={{headerShown : false}}>
                <bottomnavbar.Screen name="Home" component={Home} options={({navigation})=>({
                    tabBarActiveTintColor : 'black',
                    tabBarInactiveTintColor : 'gray',
                    tabBarIcon : ({color , size})=>(
                        <Fontisto name="home" size={size} color={color} />
                    )
                    })}/>
                <bottomnavbar.Screen name="Map" component={About} options={({navigation})=>({
                    tabBarActiveTintColor : 'black' , 
                    tabBarInactiveTintColor : 'gray' ,
                    tabBarIcon : ({color , size})=>(
                        <Feather name="map" color={color} size={size} />
                    )
                })} />
                <bottomnavbar.Screen name="Contact" component={Contact} options={(navigation)=>({
                    tabBarActiveTintColor : 'black' ,
                    tabBarInactiveTintColor : 'gray' ,
                    tabBarIcon : ({color , size})=>(
                        <AntDesign name="contacts" color={color} size={size} />
                    )
                })} />
                <bottomnavbar.Screen name="Search" component={Search} options={({navigation})=>({
                    tabBarActiveTintColor : 'black',
                    tabBarInactiveTintColor : 'gray' , 
                    tabBarIcon : ({color , size})=>(
                        <Fontisto name="search" color={color} size={size} />
                    )
                })} />
            </bottomnavbar.Navigator> :  <View style={[style.container , style.horizontal]}><ActivityIndicator size="large" color="#0000ff" /></View> }

            
        </>
    )
}
export default BottomNavbar;

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
      }
})