import React, { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Formik } from "formik";
import * as Yup from 'yup';
import { RegisterPageInputs } from "../Constants/Registerpageinputs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useDispatch, UseDispatch } from "react-redux";
import { loginSucess } from "../Redux/authAction";


const ValidationSchema = Yup.object().shape({
    email : Yup.string().email().required("please enter your email"),
    password : Yup.string().required("please enter your password")
})


const LoginPage = ({navigation}:any)=>{
    const dispatch = useDispatch()
 


    const saveLoginData = async(values:any)=>{
            try {
                const LoginData = await AsyncStorage.getItem("API")
                if(LoginData){
                    const pharsedData = await JSON.parse(LoginData)
                    if(pharsedData){
                        if(values.email === pharsedData.email && values.password === pharsedData.password){
                            dispatch(loginSucess(pharsedData))
                            navigation.navigate("Drawer")
                    }else{
                        Alert.alert("User not exist")
                    }
                    
                    }else{
                        Alert.alert("Invalid Userdetails")
                    }
                }else{
                    Alert.alert("Error 404")
                }
            } catch (error) {
                Alert.alert("please register for email id and password")
            }
    }


    return(
        <>
            <ScrollView style={style.main}>
                <View>
                    <Text style={style.heading}>Login Here</Text>
                    <AntDesign style={style.icon} name="arrowleft" size={20} color={"black"} onPress={()=>navigation.navigate("Register")} />
                    </View>
            
            <Formik initialValues={{email:"" , password:""}} validationSchema={ValidationSchema} onSubmit={saveLoginData}>
                {({handleChange , handleBlur , handleSubmit , values , errors})=>(
                    <View>
                        <View>
                            <TextInput style={style.inputfields} value={values.email} onChangeText={handleChange('email')} onBlur={handleBlur('email')} placeholder={RegisterPageInputs.email} />
                            {errors.email && (<Text style={style.errormessage}>{errors.email}</Text>)}
                            <TextInput style={style.inputfields} value={values.password} onChangeText={handleChange('password')} onBlur={handleBlur('password')} placeholder={RegisterPageInputs.password}/>
                            {errors.password && (<Text style={style.errormessage}>{errors.password}</Text>)}
                        </View>
                        <View>
                            <TouchableOpacity onPress={handleSubmit} style={style.submitbutton}><Text style={style.login}>Login</Text></TouchableOpacity>
                        </View>
                    <View style={style.account}><Text>Don't have an Account ? <TouchableOpacity onPress={()=>navigation.navigate("Register")} style={style.opacity}><Text>Register here</Text></TouchableOpacity></Text></View>

                    </View>
                )}

            </Formik>
            

            
            
            
            </ScrollView>
        </>
    )
}
export default LoginPage;


const style = StyleSheet.create({
    heading : {
        fontSize : 45,
        marginLeft : 30,
        marginTop : 50
    },
    inputfields : {
        borderWidth : 2,
        paddingTop : 15,
        marginTop : 40,
        borderRadius : 15,
        width : 390,
        marginLeft : 10
    },
    submitbutton : {
        width : 200,
        backgroundColor : 'black',
        height : 50,
        borderWidth : 2,
        justifyContent : 'center',
        alignItems : 'center',
        marginLeft : 100,
        marginTop : 40,
        borderRadius : 10
    },
    errormessage : {
        fontSize : 17,
        marginLeft : 13
    },
    main : {
        backgroundColor : '#697565',
        height : 900
    },
    login:{
        color : 'white'
    },
    icon :{
        position : 'absolute',
        top : 5,
        left : 10,
        fontSize : 30
    },
    account:{
        marginTop : 20,
        marginLeft : 75
    },
    opacity:{
        marginTop : 7.5
    }
})