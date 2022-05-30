import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import DetailProduk from './screens/DetailProduk';
import Home from './screens/Home';
import Barang from './screens/Barang';
import biodata from './screens/biodata';
import info from './screens/info';



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Barang" component={Barang} />
        <Stack.Screen name="Detail" component={DetailProduk} />
        <Stack.Screen name="biodata" component={biodata} />
        <Stack.Screen name="info" component={info} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

