import {Text, View, StyleSheet, Linking, TouchableOpacity, Platform, Image} from 'react-native'
import React from 'react'
import CategoriesData from '../assets/Data/CategoriesData'
import PopularData from '../assets/Data/PopularData'

const OrderDelivery = () =>{

   const onPressMobileNumberClick = () => {
  
        Linking.OpenURL(`tel:119`);
     }

  return(
    <View style={styles.maintheme}>
      <View style={styles.detailstitlewra}>
          <Text style={styles.detailstitle}>Delivery Man Details</Text>
      </View>
      <View style={styles.callwrapper}>
        
        <View style={styles.imagewrapper}>

          <Image source={require('../assets/images/profile.jpg')} 
        style={styles.image}/>

          <View style={styles.phonenumberwrapper}>

            <Text style={styles.phonenumbertext}>Man Name:</Text>
            <Text style={styles.phonenumber}>Mehmet Faahem</Text>

          </View>
          <View style={styles.phonenumberwrapper}>

            <Text style={styles.phonenumbertext}>Phone Number:</Text>
            <Text style={styles.phonenumber}>+88017232473486</Text>

          </View>
          <View style={styles.phonenumberwrapper}>

            <Text style={styles.phonenumbertext}>Capability::</Text>
            <Text style={styles.phonenumber}>In 20 Minute</Text>

          </View>

        </View>

        <TouchableOpacity onPress={() => {onPressMobileNumberClick}}>
          <Text style={styles.calltext}>Call Now !</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OrderDelivery

const styles = StyleSheet.create({
  maintheme:{
    flex: 1,
    backgroundColor: '#161717',
    justifyContent: 'center',
  },
  calltext:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffa826',
    paddingHorizontal: 34,
    paddingVertical: 18,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    borderTopEndRadius: 12,
    borderTopStartRadius: 12
  },
  callwrapper:{
    backgroundColor: 'white',
    paddingHorizontal: 50,
    alignSelf: 'center',
    borderBottomRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  image:{
    height: 100,
    width: 100,
    borderRadius: 90,
    borderWidth: 3,
    borderColor: '#ffa826'
  },
  imagewrapper:{
    alignSelf: 'center',
    paddingBottom: 60,
    paddingTop: 30,
    flexDirection: 'colum',
    alignItems: 'center',
    
  },
  phonenumber:{
    fontSize: 20,
  },
  phonenumbertext:{
    fontWeight: 'bold',
    fontSize: 16,
  },
  phonenumberwrapper:{
    alignItems: 'center',
    paddingTop: 15
  },
  detailstitle:{
    color: '#ffa826',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 16,
  },
  detailstitlewra:{
    borderBottomWidth: 3,
    borderColor: 'white',
  }
})