import React from 'react'
import {Text, StyleSheet, View, SafeAreaView, Image, TouchableOpacity, FlatList, ScrollView} from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Details ({route, navigation}){

  const {item} = route.params
  
  return(
    <View style={styles.conatiner}>
      <ScrollView contentInsetAdjustmentBehavior='automatic'
                  showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <View style={styles.headerwrapper}>

            <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
              <View style={styles.headeleft}>
                <Ionicons name="arrow-back-circle-sharp" size={24} color="#ffa826" />
              </View>
            </TouchableOpacity>

              <View style={styles.headeright}>
                <Ionicons name="md-star" size={24} color="#ffa826" />
              </View>
            
          </View>
        </SafeAreaView>
        <View>
          <Text style={styles.itemtitle}>{item.title}</Text>
        </View>

        <View style={styles.pricewrapper}>
          <View style={styles.alignments}>
            <Ionicons name="pricetags" size={24} color="#ffa826" />
            <Text style={styles.sizetext}>Price: </Text>
          </View>  
            <Text style={styles.sizeeer}>{item.price}</Text>
        </View>


        <View style={styles.imagewrapper}>
          <Image source={item.image} style={styles.itemiamge}/>
        </View>


        <View style={styles.itemdescription}>

          <View style={styles.sizewrapper}>
            <View style={styles.alignments}>
              <SimpleLineIcons name="size-fullscreen" size={20} color="#ffa826" />
              <Text style={styles.sizetext}>Size:</Text>
            </View>
            <Text style={styles.sizeeer}>{item.size}</Text>
          </View>

          <View style={styles.sizewrapper}>
            <View style={styles.alignments}>
              <MaterialCommunityIcons name="pizza" size={24} color="#ffa826" />
              <Text style={styles.sizetext}>Crust:</Text>
            </View>
            <Text style={styles.sizeeer}>{item.crust}</Text>
          </View>

          <View style={styles.sizewrapper}>
            <View style={styles.alignments}>
              <MaterialIcons name="delivery-dining" size={24} color="#ffa826" />
              <Text style={styles.sizetext}>Delivery In: </Text>
            </View>  
            <Text style={styles.sizeeer}>{item.deliverytime}</Text>
          </View>

          
          <TouchableOpacity 
            style={styles.buttonwrapper}
            onPress={()=> navigation.navigate('OrderDelivery')}
            >


           <View style={styles.buti}>
            <Text style={styles.buttontext}>Place Your Order</Text>
            <AntDesign name="doubleright" size={24} color="black" style={styles.buttonicon}/>
           </View> 

          </TouchableOpacity>
        </View>
      </ScrollView>  
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner:{
    flex: 1,
    backgroundColor: '#161717'
  },
  headerwrapper:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  headeleft:{
    borderWidth: 1,
    borderColor: 'white',
    padding: 8,
    borderRadius: 2
  },
  itemtitle:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    paddingHorizontal: 20,
    marginTop: 25,
  },
  pricewrapper:{
    paddingHorizontal: 20,
    paddingTop: 10
  },
  itemiamge:{
    height: 200,
    width: 200
  },
  imagewrapper:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25
  },
  itemdescription:{
    paddingHorizontal: 20,
    
  },
  sizewrapper:{
    flexDirection: 'colum',
    paddingTop: 10
  },
  sizetext:{
    fontSize: 35,
    color: '#ffa826',
    fontWeight: 'bold',
    paddingLeft: 8
  },
  sizeeer:{
    color: 'white',
    fontSize: 18
  },
  alignments:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonwrapper:{
    backgroundColor: '#ffa826',
    marginTop: 18,
    padding: 2,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttontext:{
    fontWeight: 'bold',
    fontSize: 22
  },
  buti:{
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center'

  },
  buttonicon:{
    paddingLeft: 8,
    paddingTop: 2
  }

  
})

// , {
//               returant: resturant,
//               currentLocation: currentLocation
//             }