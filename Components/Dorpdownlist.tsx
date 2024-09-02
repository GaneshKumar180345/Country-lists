import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Language from '../JSON DATA/Countries.json';
 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    dropdownContainer: {
    position : 'absolute',
      width: 170,
      marginLeft : 205,
      bottom : 20
      
    },
    dropdown: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    text: {
      color: '#333',
    },
    dropdownList: {
      backgroundColor: '#fff',
    },
    placeholder: {
      color: '#888',
    },
    selectedText: {
      marginTop: 20,
      fontSize: 16,
    },
  });

const Dropdownlist = ()=>{
    const[open , setOpen] = useState(false)
    const [value , setValue] = useState(null)
    const [language , setLanguage] = useState(Language)
    return(
        <>
        <View>
            
            <DropDownPicker
            open={open}
            value={value}
            items={language}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setLanguage}
            placeholder="select an languages"
            containerStyle={styles.dropdownContainer}
            style={styles.dropdown}
            textStyle={styles.text}
            dropDownContainerStyle={styles.dropdownList}
            placeholderStyle={styles.placeholder}
            listMode="SCROLLVIEW"
            scrollViewProps={{scrollEnabled : true}}
            />
            
            
        </View>
        </>
    )
}
export default Dropdownlist;