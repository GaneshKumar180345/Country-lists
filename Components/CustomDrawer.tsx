import React, { useState } from "react";
import {DrawerContentScrollView , DrawerItemList} from '@react-navigation/drawer';
import { Image, StyleSheet, Text, TouchableOpacity, View , PermissionsAndroid } from "react-native";
import {launchImageLibrary} from 'react-native-image-picker';
import {launchCamera} from 'react-native-image-picker';
import { useDispatch } from "react-redux";




const CustomDrawer = (props:any  )=>{

    const options = {
        saveToPhotos : true,
        mediaType : 'photo'
    }


    const [imageurl , setImageuri] = useState('https://w7.pngwing.com/pngs/869/483/png-transparent-profile-illustration-computer-icons-user-profile-icon-profile-size-silhouette-desktop-wallpaper-profile.png')
    const openimagefromGallery =async()=>{
        const result = await launchImageLibrary(options)
        setImageuri(result.assets[0].uri)
    }

    const openimagefromCamera = async()=>{
         const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
        )
        if(granted === PermissionsAndroid.RESULTS.GRANTED ){
            const result = await launchCamera(options)
            setImageuri(result.assets[0].uri)
        }   

    }



    return(
        <>


            <DrawerContentScrollView {...props} style={style.main}  >
                <TouchableOpacity onPress={openimagefromGallery} >
                    {imageurl && (<Image style={style.image} source={{uri:imageurl}}/>)}
                    <Text style={style.username}>John Doe</Text>
                    </TouchableOpacity>
            
                <View style={style.profile}>
                    <TouchableOpacity style={style.buttongallery} onPress={openimagefromCamera}><Text style={style.text} >upload camera</Text></TouchableOpacity>
                    
                </View>
                <DrawerItemList {...props}/>

                <View>
                    <TouchableOpacity style={style.logout}>
                        <Text style={style.out}>Log out</Text>
                    </TouchableOpacity>
                </View>

            </DrawerContentScrollView>
           
        </>
    )
}
export default CustomDrawer;

const style = StyleSheet.create({
    main : {
        backgroundColor : '#CBE2B5',
        position : 'relative'
    },
    image : {
        width : 125,
        height : 125,
        marginLeft : 60,
        marginTop : 25,
        borderWidth : 2,
        borderRadius : 100    
    },
    buttongallery : {
      borderWidth : 0.8,
      width : 40,
      height : 40,
      borderRadius : 3,
      borderColor : 'black',
        position : 'absolute',
        bottom : 145,
        left : 230
    },
    text : {
        textAlign : 'center',
        fontSize : 12
    },
    logout : {
        marginTop : 200,
        borderWidth : 2,
        height : 40,
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#697565',
        width : 200,
        marginLeft : 35
    },
    out : {
        textAlign : 'center',
        color : 'white'
    },
    username :{
        fontSize : 15,
        marginLeft : 90,
        marginTop : 12
    },
    profile :{
        borderBottomWidth : 2,
        borderColor : 'black'
    }
})