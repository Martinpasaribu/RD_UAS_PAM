import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground, Text, SafeAreaView, View,Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import laptop from './cd/laptop.webp';
import hp from './cd/hp.jpg';
import lampu from './cd/lampu.jpg';
import autor from './cd/autor2.jpg';
import info from './cd/info.png';
const Home = ({navigation}) => {

 

  return (
<ImageBackground 
    source={require('./cd/bc.jpg')}
    style={{flex:1}}>

    <SafeAreaView style={styles.container}>
      
      <Text style={styles.judul}>Toko Barang Elektronik</Text>

      <View  style={styles.autor}> 
      <Text> ================</Text> 
      </View>
      <TouchableOpacity  onPress={() => 
        navigation.navigate('biodata')}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Image
      style={{ width: 54, height: 54 ,left:133,bottom:60}}
      
       source={autor} className="btn-autor" alt="autor"/>
       </View>
      
      </TouchableOpacity>

      <TouchableOpacity  onPress={() => 
        navigation.navigate('info')}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Image
      style={{ width: 54, height: 54 ,left:-125,bottom:60}}
      
       source={info} className="btn-info" alt="info"/>
       </View>
      
      </TouchableOpacity>
      <Text style={styles.subJudul}>Barang Yang Tersedia</Text>


      
      <View style={styles.tombol}>


        <TouchableOpacity style={styles.btn} onPress={() => {
            navigation.navigate('Barang',{ kategori: "laptops",});
          }}>
          <Text style={styles.btnTxt}>Laptop</Text>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <Image
          style={{ width: 100, height: 100 ,left:79,bottom:10}}
           source={laptop} className="btn-laptop" alt="laptop"/>
      </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => {
            navigation.navigate('Barang', {kategori: "smartphones",});
          }}>
          <Text style={styles.btnTxt}>Smartphone</Text>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
          <Image
          style={{ width: 100, height: 100 ,left:79,bottom:10}}
           source={hp} className="btn-hp" alt="hp"/>
           </View>
          </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => {
              navigation.navigate('Barang', {kategori: "lighting",});
            }}>
            <Text style={styles.btnTxt}>Lampu</Text>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <Image
            style={{ width: 100, height: 100 ,left:79,bottom:10}}
             source={lampu} className="btn-lampu" alt="lampu"/>
             </View>
          </TouchableOpacity>
      </View>
  
      <StatusBar style="auto" />
    </SafeAreaView>
</ImageBackground>
  )
}

const styles = StyleSheet.create({

  container:{
    display:'flex',
    paddingTop:'25%',
    
    height:'100%',
  },

  judul:{
    width:'90%',
    alignSelf:'center',
    fontSize:40,
    textAlign:'center',
    marginBottom:'15%',
    top:'-10%',
    color:'white',
  },

  subJudul:{
    width:'80%',
    alignSelf:'center',
    fontSize:30,
    textAlign:'center',
    marginBottom:'5%',
    color:'white',
  },

  tombol:{
    display:'flex',
    flexDirection:'column',
    alignSelf:'center',
    width:'80%',
  },

  btn:{
    padding:5,
    paddingVertical:50,
    borderWidth:2,
    marginHorizontal:5,
    marginVertical:5,
    width:"100%",
    alignItems:'center',
    backgroundColor:'#afdbfa',
    borderRadius:5,
    borderColor:'white',
  },

  autor:{
    
    top:-100,
    left: 1,
   
    
    marginHorizontal:5,
    marginVertical:5,
   
    alignItems:'center',
    backgroundColor:'#afdbfa',
    borderRadius:5,
    borderColor:'white',
  },

  btnTxt:{
    fontSize:20,
    right:70,
  },
  

});
  

export default Home