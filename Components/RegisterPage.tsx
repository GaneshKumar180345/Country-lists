import React from "react";
import { Formik } from "formik";
import * as Yup from 'yup';
import { Text, TextInput, View , TouchableOpacity, StyleSheet, Alert, ScrollView , Linking } from "react-native";
import { RegisterPageInputs } from "../Constants/Registerpageinputs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { registerSucess } from '../Redux/authAction';



const ValidationSchema = Yup.object().shape({
    name : Yup.string().required("Please enter your username").min(4,"username must be 4-10 characters"),
    email : Yup.string().email().required("please enter your email Id"),
    phone : Yup.string().required("please enter your phone number"),
    password : Yup.string().required("please enter your password").min(4 , "password must bt contain atleast 4-10 characters")
})




const RegisterPage = ({navigation}:any )=>{
    const dispatch = useDispatch()

    const handleSubmit = async(values:any) => {
        try {
            await AsyncStorage.setItem("API" , JSON.stringify(values))
            dispatch(registerSucess(values))
            navigation.navigate("Login")
        } catch (error) {
            Alert.alert("error 404")
        }
    }

    return(
        <>
        <ScrollView style = {style.main}>
            <View>
                <Text style={style.heading}>Register Page</Text>
                <AntDesign style={style.icon} name="arrowright" size={25} color={'black'}  onPress={()=>navigation.navigate("Login")}/>
            </View>
                <Formik initialValues={{name : "" , email : "" , phone : "" , password : ""}} validationSchema={ValidationSchema} onSubmit={handleSubmit}>
                    {({handleChange , handleBlur , handleSubmit , values , errors})=>(
                       <View>
                       <View>
                        <TextInput style={style.inputfields} value={values.name} onChangeText={handleChange('name')} onBlur={handleBlur('name')} placeholder={RegisterPageInputs.name}/>
                        {errors.name && (<Text style={style.errormessage}>{errors.name}</Text>)}
                        <TextInput style={style.inputfields} value={values.email} onChangeText={handleChange('email')} onBlur={handleBlur('email')} placeholder={RegisterPageInputs.email}/>
                        {errors.email && (<Text style={style.errormessage}>{errors.email}</Text>)}
                        <TextInput style={style.inputfields} value={values.phone} onChangeText={handleChange('phone')} onBlur={handleBlur('phone')} placeholder={RegisterPageInputs.phone}/>
                        {errors.phone && (<Text style={style.errormessage}>{errors.phone}</Text>)}
                        <TextInput style={style.inputfields} value={values.password} onChangeText={handleChange('password')} onBlur={handleBlur('password')} placeholder={RegisterPageInputs.password}/>
                        {errors.password && (<Text style={style.errormessage}>{errors.password}</Text>)}
                       </View>
                        <View>
                            <TouchableOpacity style={style.submitbutton} onPress={handleSubmit}><Text style={style.register}>Register</Text></TouchableOpacity>
                        </View>
                        <View style={style.account}><Text>Do you already have an Account ? <TouchableOpacity onPress={()=> navigation.navigate("Login")} style={style.login}><Text >Login here</Text></TouchableOpacity></Text></View>

                       </View>     
                    )}
                </Formik>


            </ScrollView>
        </>
    )
}
export default RegisterPage;


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
    register : {
        color : 'white'
    },
    icon :{
        position : 'absolute',
        left : 370,
        top : 20
    },
    account :{
        marginTop : 15,
        marginLeft : 50
    },
    login:{
        marginTop : 7.5
    }
})