import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Image,NavigationContainer,ImageBackground, SafeAreaView, ScrollView,View, TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigation, useRoute} from '@react-navigation/native';

//
export default function biodata ({navigation}) {
    return (

    <ImageBackground 
    source={require('./cd/bc.jpg')}
    style={{flex:1}}>

      <View style={styles.container}>
      
    <TouchableOpacity  onPress={() => 
      navigation.navigate('Home')}>
    <Text style={{fontSize:20,color:'blue',bottom:85,left:120}}>Kembali
    </Text>
    </TouchableOpacity>

      <Text style={{fontSize:25,bold:true,bottom:50,color:'red'}}>Pengembang Perangkat lunak </Text>
      <StatusBar style="auto" />  

      <View  style={styles.autor}> 
      <Text style={{fontSize:16, left:12,bold:true}}> Martin Pasaribu Nim 119140122 </Text> 
      </View>
      <View  style={styles.autor}> 
      <Text style={{fontSize:16, left:12,bold:true}}> Dwi P Sinurat Nim 119140137  </Text> 
      </View>
      <View  style={styles.autor}> 
      <Text style={{fontSize:16, left:12,bold:true}}> Joy A Sembiring Nim 119140036 </Text> 
      </View>
     
     
        <View style={{  justifyContent: 'center', alignItems: 'center', }}>
        <Image
        style={{ width: 70, height: 70 ,left:-150,bottom:200}}
        
         source={autor} className="btn-autor" alt="autor"/>
         </View>
         <View style={{  justifyContent: 'center', alignItems: 'center', }}>
         <Image
         style={{ width: 70, height: 70 ,left:-150,bottom:200}}
         
          source={autor} className="btn-autor" alt="autor"/>
          </View>
          <View style={{  justifyContent: 'center', alignItems: 'center', }}>
          <Image
          style={{ width: 70, height: 70 ,left:-150,bottom:200}}
          
           source={autor} className="btn-autor" alt="autor"/>
           </View>

         
    </View>

    </ImageBackground>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    autor:{
        top:12,
    left: 1,
   
    
    marginHorizontal:5,
    marginVertical:5,
   paddingVertical:20,
   width:'75%',
    alignItems:'center',
    backgroundColor:'#afdbfa',
    borderRadius:5,
    borderColor:'white',
    }
  });