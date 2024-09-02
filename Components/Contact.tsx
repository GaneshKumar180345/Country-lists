import React, { useEffect, useState } from "react";
import Contacts from 'react-native-contacts';
import { View, Text, FlatList, PermissionsAndroid, Platform, StyleSheet , Image } from "react-native";




const Contact = ()=>{
    const [contacts, setContacts] = useState([]);
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    const requestPermission = async () => {
     if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            {
              title: 'Contacts Permission',
              message: 'This app needs access to your contacts.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            setPermissionGranted(true);
            loadContacts();
          } else {
            console.warn('Permission to access contacts was denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };

    const loadContacts = () => {
      Contacts.getAll().then(contacts => {
        setContacts(contacts)
      }).catch(e => console.error(e))
    };

    requestPermission();
  }, []);

  const renderItem = ({ item }) => {
    const { givenName, familyName, phoneNumbers, thumbnailPath } = item
    const initials = `${givenName[0] || ''}${familyName[0] || ''}`.toUpperCase()
    return (
      <View style={style.item}>
         {thumbnailPath ? (
          <Image source={{ uri: thumbnailPath }} style={style.image} />
        ) : (
          <View style={style.placeholder}>
            <Text style={style.initials}>{initials}</Text>
          </View>
        )}
        <View style={style.textContainer}>
          <Text style={style.name}>{`${givenName} ${familyName}`}</Text>
          {phoneNumbers.map((number, index) => (
            <Text key={index} style={style.phoneNumber}>{number.number}</Text>
          ))}
        </View>
      </View>
    )
  }



    return(
        <>
            <View>
                {permissionGranted ? (<FlatList data={contacts} renderItem={renderItem} keyExtractor={item => item.recordID} />) : (<Text>No contacts available or permission not granted</Text>)}
            </View>
        </>
    )
}
export default Contact;

const style = StyleSheet.create({
  main :{
     position : 'relative',
     borderWidth : 0.7,
     height : 80,
     display : 'flex',
     justifyContent : 'center',
     
  },
  Text :{
      color : 'black',
      position : 'absolute',
      top : 25,
      left : 60
  },
  phone : {
    position : 'absolute',
    color : 'black',
    top : 45,
    left : 60
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    marginTop :15
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderWidth : 0.7
  }
 ,
  placeholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection : 'row'
  },
  initials: {
    fontSize: 20,
    color: '#555',
  },
  textContainer: {
    position : 'relative',
    marginLeft: 10,
    display : 'flex',
    flexDirection : 'row'
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  phoneNumber: {
    fontSize: 14,
    color: '#666',
    marginHorizontal : 7
  },
})