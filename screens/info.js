import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Image,NavigationContainer,ImageBackground, SafeAreaView, ScrollView,View, TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigation, useRoute} from '@react-navigation/native';

import logo3 from './cd/logo3.jpg';

//
export default function info ({navigation}) {
    return (
        <ImageBackground 
    source={require('./cd/logo3.jpg')}
    style={{flex:1}}>

  

      <View style={styles.container}>
      
      
      <TouchableOpacity  onPress={() => 
        navigation.navigate('Home')}>
      <Text style={{fontSize:20,color:'blue',bottom:170,left:120}}>Kembali
      </Text>
      </TouchableOpacity>
      
      <Text style={{fontSize:33,bold:true,bottom:70,color:'red'}}> Infromasi Aplikasi </Text>
      <StatusBar style="auto" />  

      <View  style={styles.autor}> 
      <Text style={{fontSize:20, left:1,bold:true,textAlign:'justify'}}>Tugas UAS Matakuliah Pengembangan Aplikasi Mobile Kelas RD  Dengan Project Membuat Aplikasi  Sederhana yang  Menampilkan daftar suatu        Produk dan detail Produknya (Menggunakan       CALL API dan dipanggil Secara AsinKron)</Text>  
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
   paddingVertical:40,
   width:'98%',
    alignItems:'center',
    backgroundColor:'#afdbfa',
    borderRadius:5,
    borderColor:'white',
    }
  });