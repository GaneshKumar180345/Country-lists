import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ScrollView , RefreshControl, TouchableOpacity } from 'react-native';
import axios from 'axios';
import DropDownPicker from "react-native-dropdown-picker";
import Language from '../JSON DATA/Countries.json'
import Dropdownlist from './Dorpdownlist';




const CountryList = ({navigation}) => {
  const [countries, setCountries] = useState([])
  const [open ,setOpen] = useState(false)
  const [value , setValue] = useState(null) 
  const [data , setData] = useState(Language)



  const handlePressed = (country)=>{
      navigation.navigate('Map' , {country})
  }
  
 

  useEffect(() => {
   
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const A = response.data
        setCountries(A);

         
      } catch (error) {
        console.error('Error fetching countries data:', error);
      }
    };

    fetchCountries();
  }, []);

  
  const renderItem = ({ item }) => {
    const currencies = item.currencies ? Object.values(item.currencies)[0] : {};
    const languages = item.languages ? Object.values(item.languages).join(', ') : '';

    return (
      <View style={styles.itemContainer}>
        <Text style={styles.countryName}>{item.name.common}</Text>
        <Image  style={styles.image} source={{uri:item.flags.png}}/>
        <Text style={styles.currencyname} >Name: {currencies.name}</Text>
        <Text style={styles.currencysymbol} >Symbol : {currencies.symbol}</Text>
        <Text style={styles.capital} >Capital: {item.capital ? item.capital[0] : 'N/A'}</Text>
        <Text style={styles.region} >Region: {item.region}</Text>
        <TouchableOpacity onPress={()=> handlePressed(item)}><Text style={styles.read}>Read more</Text></TouchableOpacity>
         <Dropdownlist/>
      </View>
    );
  };

  return (
      <View>
       <FlatList
        style={styles.container}
        data={countries}
        renderItem={renderItem}
        keyExtractor={(item) => item.cca3}
      />
      
    </View>
  );
};



export default CountryList;

const styles = StyleSheet.create({
  container: {
    position : 'relative',
    padding: 10,
    backgroundColor : "#1E201E"
  },
  itemContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#ECDFCC',
  },
  flag: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  countryName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color : '#697565', 
  },
  image : {
    width : 150, 
    height :75
  },
  capital : {
    position : 'absolute',
    left : 200,
    top : 20,
    fontSize : 14
  },
  region : {
    position : 'absolute',
    top : 50,
    left : 200,
    fontSize : 14
  },
  language :{
    position : 'absolute',
    backgroundColor : '#173B45',
    width : 150,
    height : 50,
    top : 100,
    left : 220,
    borderWidth: 0.8,
    borderRadius : 10
  },
  currencyname :{
    fontSize : 14,
    marginTop : 10
  },
  currencysymbol : {
        fontSize : 14,
        marginTop : 5
  },
  read :{
    width : 120,
    backgroundColor : '#1E201E',
    height : 40,
    color : 'white',
    borderWidth : 0.7,
    borderRadius : 7,
    marginTop : 10,
    textAlign : 'center',
    textAlignVertical : 'center'
  }
});