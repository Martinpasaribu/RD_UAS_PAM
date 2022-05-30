import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigation, useRoute} from '@react-navigation/native';
import Card from '../components/Card';

const Barang = () => {

  const [barang, setBarang] = useState([]);
  const navigation = useNavigation();
  const route= useRoute()
  
  useEffect(() => {
    ambil(); 
  }, []);

  function ambil() {
      axios.get(`https://dummyjson.com/products/category/${route.params.kategori}`).then(function (res) {
      setBarang(res.data.products);
    });
  }

  return (

    <SafeAreaView style={styles.container}>
        
      <TouchableOpacity style={styles.tombol}  onPress={() => navigation.goBack()}>
        <Text style={styles.back}>Kembali</Text>
      </TouchableOpacity>
      
      <Text style={styles.judul}>Daftar Barang</Text>
      <ScrollView style={styles.produkList} showsVerticalScrollIndicator={false}>
      {
        barang.map((item) => {
          return (
            <Card image={item.images[0]} key={item.id} nama={item.title} harga={item.price} stock={item.stock} kategori={item.category} description={item.description}/>
          )
        })
      }
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor:'#afdbfa',
    },

    tombol:{
      width:'100%',
    },

    back:{
      backgroundColor: '#399de3',
      color: 'white',
      paddingTop: '12%',
      width:'100%',
      fontSize: 20,
      paddingLeft:'5%',
    },
  
    judul: {
      paddingTop: '5%',
      paddingBottom: '5%',
      backgroundColor: '#399de3',
      fontSize: 30,
      width: '100%',
      textAlign: 'center',
      color: 'white',
    },
  
    produkList:{
      marginBottom:'40%',  
      paddingVertical:10, 
      width:'90%',
    },
  });

export default Barang