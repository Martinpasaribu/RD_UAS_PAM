import { StyleSheet, Text, SafeAreaView, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute, useNavigation} from '@react-navigation/native';

const DetailProduk = () => {

    const route= useRoute()
    const navigation = useNavigation();

    return (

        <SafeAreaView style={styles.container}>
            <ScrollView>

                <TouchableOpacity style={styles.btnRed}  onPress={() => navigation.goBack()}>
                    <Text style={styles.back}>Kembali</Text>
                </TouchableOpacity>


                <View style={styles.atas}> 
                    <Image source={{ uri: route.params.image }} style={styles.gambar}/>
                </View>

                <View style={styles.bawah}>

                    <View style={styles.textWrap}>
                        <View style={styles.cardContent}>
                            <Text style={styles.judul}>Nama Barang</Text>
                            <Text  style={styles.text}>{route.params.nama}</Text>
                        </View>

                        <View style={styles.cardContent}>
                            <Text style={styles.judul}>Kategori</Text>
                            <Text  style={styles.text}>{route.params.kategori}</Text>
                        </View>
                    </View>

                    <View style={styles.textWrap}>
                        <View style={styles.cardContent}>
                            <Text style={styles.judul}>Harga</Text>
                            <Text  style={styles.text}>{route.params.harga}</Text>
                        </View>

                        <View style={styles.cardContent}>
                            <Text style={styles.judul}>Stock</Text>
                            <Text  style={styles.text}>{route.params.stock}</Text>
                        </View>
                    </View>

                    <View style={styles.cardContent}>
                        <Text style={styles.judul}>Deskripsi Produk</Text>
                        <Text  style={styles.text}>{route.params.description}</Text>
                    </View>
                </View>

                    <TouchableOpacity style={styles.tombol}>
                        <Text style={styles.textTombol}>Beli Sekarang</Text>
                    </TouchableOpacity>
          
                
            </ScrollView>
        </SafeAreaView>
 
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:'15%',
        color:'black',
    },

    atas: {
        height: 300,
        width: 300,
        alignSelf: 'center'
    },
    
    gambar: {
        height: '100%',
        width: '100%',
        alignSelf:'center',
      },

    bawah: {
        marginTop: '5%',
        width: '80%',
        alignSelf:'center',
    },

    textWrap:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'80%',
    },

    cardContent:{
        marginVertical: 10,
    },

    judul: {
        fontWeight: 'bold',
        marginBottom: 1,
        fontSize: 25,
        color: '#399de3',
    },

    text: {
        maxWidth: '100%',
        width: '100%',
        fontSize: 15,
    },
    
    back:{
        fontSize:20,
        marginBottom:50,
        marginLeft:20,
    },

    tombol:{
        backgroundColor:'#399de3',
        padding:20,
        width:"80%",
        borderRadius:5,
        alignSelf: 'center',
        marginTop:20,
    },

    textTombol:{
        color:'white',
        fontSize: 18,
        textAlign:'center',
    },

});
  

export default DetailProduk 