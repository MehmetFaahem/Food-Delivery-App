import React from 'react'
import {Text, StyleSheet, View, SafeAreaView, Image, TouchableOpacity, FlatList, ScrollView} from 'react-native'
import CategoriesData from '../assets/Data/CategoriesData'
import PopularData from '../assets/Data/PopularData'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Home({navigation}){

  const renderCategoryItem = ({item}) =>{
    return(
      <View style={[styles.categoriesItemWrapper, {
        marginLeft: item.id == 1? 10 : 0
      }]}>
        <Image source={item.image} style={styles.iconlogo}/>
        <Text style={styles.categoriesItemTitle}>{item.title}</Text>
        <TouchableOpacity style={styles.categoriesItemSelectButton}>
          <AntDesign 
            name="rightcircleo" 
            size={24} 
            color="black" 
            style={styles.categoriesItemSelectIcon}
            /> 
        </TouchableOpacity>
      </View>
    )
  }

  return(
    <View style={styles.maintheme}>

      <ScrollView contentInsetAdjustmentBehavior='automatic'
                  showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <View style={styles.headerwrapper}>

          <TouchableOpacity>
            <MaterialCommunityIcons name="face-profile" size={29} color="white" 
            style={styles.profilelog}/>
          </TouchableOpacity>  
           
          
          <TouchableOpacity>
            <MaterialIcons name="menu-open" size={24} color="white" />
          </TouchableOpacity>

        </View>
      </SafeAreaView>

      <View style={styles.titlewrapper}>
        <Text style={styles.title1}>Food</Text>
        <Text style={styles.title2}>Delivery</Text>
      </View>

      <View style={styles.searchwrapper}>
        <FontAwesome name="search" size={24} color="white" />
        <View style={styles.search}>
          <Text style={styles.searchtext}>Search</Text>
        </View>
      </View>

      <View style={styles.categorieswrapper}>
        <Text style={styles.categoriestitle}>Categories</Text>
        <View style={styles.listwrapper}>
          <FlatList
            data={CategoriesData}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
        </View>
      </View>

      <View style={styles.popularwrapper}>
        <Text style={styles.populartext}>Popular</Text>
        {PopularData.map((item)=>(
          <TouchableOpacity key={item.id} onPress={()=> navigation.navigate('Details', {
            item: item
          })}> 

          <View 
            
            style={styles.popularcardwrapper}>
            
            <View>
              <View style={styles.popularmainwrapper}>
                <View style={styles.populartopwrapper}>
                  <MaterialCommunityIcons name="crown" size={24} color="#ffa826" />
                  <Text style={styles.populartoptext}>Top Of Today</Text>
                </View>
                <View style={styles.Itemtitlewrapper}>

                  <Text style={styles.itemtitlestyle}>{item.title}</Text>
                  <Text style={styles.itemwightstyle}>Weight: {item.weight}</Text>
                  
                </View>
              </View>
              <View style={styles.popularcardbottom}>
                <View style={styles.popularcardpizzabutton}>
                  <AntDesign name="plussquare" size={24} color="black" style={styles.ratingbutton} />
                </View>
                <View style={styles.popularcardratingwrapper}>
                  <Entypo name="star" size={24} color="#ff6f00"/>
                  <Entypo name="star" size={24} color="#ff6f00"/>
                  <Entypo name="star" size={24} color="#ff6f00"/>
                  <Entypo name="star" size={24} color="#ff6f00"/>
                  <Entypo name="star" size={24} color="#ff6f00"/>
                  <Text style={styles.ratingtext}>{item.rating}</Text>
                </View>
              </View>
            </View> 
            <View style={styles.popularcarder}>
             <Image source={item.image} style={styles.popularcardimage}/>
            </View>
          </View>       
          </TouchableOpacity>  
        ))}
      </View>

    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  maintheme:{
    flex: 1,
    backgroundColor: '#161717',
  },
  headerwrapper:{
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 30,
    color: 'white'
  },
  profilelog:{
    borderRadius: 40,
    height: 40,
    width: 40
  },
  titlewrapper:{
    paddingLeft: 20,
    marginTop: 20
  },
  title1:{
    fontSize: 30,
    color: 'white'
  },
  title2:{
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffa826'
  },
  searchwrapper:{
    flexDirection: "row",
    paddingLeft: 20,
    paddingTop: 20
  },
  searchtext:{
    marginHorizontal: 1,
    fontSize: 15,
    marginBottom: 5,
    color: 'white'

  },
  search:{
    borderBottomWidth: 3,
    flex: 1,
    marginHorizontal: 15,
    borderColor: 'white'
  },
  categorieswrapper:{
    marginHorizontal: 20,
    marginTop: 17
  },
  categoriestitle:{
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  },
  iconlogo:{
    height: 65,
    width: 65,
    alignSelf: 'center',
    marginTop: 10,
    marginHorizontal: 9.7
  },
  categoriesItemWrapper:{
    backgroundColor: '#ffa826',
    marginRight: 10,
    borderRadius: 10,
    marginTop: 10
  },
  categoriesItemTitle:{
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16
  },
  categoriesItemSelectButton:{
    alignSelf: 'center',
    margin: 10
  },
  populartext:{
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  },
  popularwrapper:{
    marginHorizontal: 20
  },
  populartopwrapper:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  populartoptext:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 10,
    marginLeft: 10
  },
  popularcardwrapper:{
    backgroundColor: 'white',
    borderRadius: 6,
    marginTop: 16,
    overflow: 'hidden'
  },
  popularmainwrapper:{
    margin: 15
  },
  itemtitlestyle:{
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5
  },
  itemwightstyle:{
    fontSize: 12,
    marginTop: 2
  },
  popularcardbottom: {
    // paddingHorizontal: 20,
    flexDirection: 'row',
    // marginBottom: 17
  },
  popularcardratingwrapper:{
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center'
  },
  ratingtext:{
    marginLeft: 6
  },
  ratingbutton:{
    backgroundColor: '#ffa826',
    padding: 10,
    borderTopEndRadius: 10
  },
  popularcardimage:{
    height: 100,
    weight: 100,
    resizeMode: 'contain',
    // marginLeft: 90
  },
  popularcarder:{
    // marginLeft: -200,
    alignItems: 'center',
    paddingBottom: 10
  }

})