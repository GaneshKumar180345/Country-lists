import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useGetDataQuery } from "../Redux/Apicall";




const RtkData = ()=>{

    const {data , error , isLoading} = useGetDataQuery()
    



    return(
        <>
            <View>
                <FlatList 
                data={data}
                keyExtractor={(item) => item.cca2}
                renderItem={({item})=>(
                    <View style={styles.itemContainer}>
                        <Text style={styles.countryName}>{item.name.common}</Text>
                        <Image style={styles.image} source={{uri : item.flags.png}}/>
                        <Text style={styles.capital}>{item.capital}</Text>
                        <Text style={styles.currencyname}>Name :{item.currencies ? Object.values(item.currencies)[0].name : 'N/A'}</Text>
                        <Text style={styles.currencysymbol}>Symbol :{item.currencies ? Object.values(item.currencies)[0].symbol : 'N/A'}</Text>
                    </View>
                )}
                />
            </View>
        </>
    )
}
export default RtkData;

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
    },
    
  });