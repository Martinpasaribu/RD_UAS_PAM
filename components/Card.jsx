import { StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = ( props ) => {

  const navigation = useNavigation();

  return (
    
    <TouchableOpacity style={styles.container} onPress={() => {
      navigation.navigate('Detail', {
        image: props.image,
        nama: props.nama,
        kategori: props.kategori,
        harga: props.harga,
        description: props.description,
        stock: props.stock,
      });
    }}>
      <View style={styles.wrap}>
        <View style={styles.top}>
          <Image source={{ uri: props.image }} style={styles.cardIMage}/>
        </View>
        
        <View style={styles.bottom}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Nama Barang</Text>
            <Text  style={styles.cardDesc}>{props.nama}</Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Harga</Text>
            <Text  style={styles.cardDesc}>{props.harga}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
      borderWidth: 2,
      borderRadius: 10,
      backgroundColor: 'white',
      borderColor: 'white',
      marginVertical: 10,
      height: 350,
      width: 305,
      alignSelf:'center',
    },

    wrap:{
      display:'flex',
      flexDirection:'column',
    },

    cardIMage: {
      height:200,
      width: 300,
      borderTopLeftRadius:10,
      borderBottomLeftRadius: 10,
    },

    bottom: {
      marginLeft: 20,
      paddingVertical: 20,

    },

    cardContent: {
      marginVertical: 10,
    },

    cardTitle: {
      fontWeight: 'bold',
      marginBottom: 1,
      fontSize: 18,
      color: '#399de3',
    },

    cardDesc: {
      maxWidth: '70%',
      width: '70%',
      fontSize: 14,
    },
  });

export default Card