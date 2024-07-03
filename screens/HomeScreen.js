import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const products = [
  { id: '1', name: 'Office Wear', price: 120, image: require('../assets/dress1.png') },
  { id: '2', name: 'Black', price: 120, image: require('../assets/dress2.png') },
  { id: '3', name: 'Church Wear', price: 120, image: require('../assets/dress3.png') },
  { id: '4', name: 'Lamerei', price: 120, image: require('../assets/dress4.png') },
  { id: '5', name: '21WN', price: 120, image: require('../assets/dress5.png') },
  { id: '6', name: 'Lopo', price: 120, image: require('../assets/dress6.png') },
  { id: '7', name: '21WN', price: 120, image: require('../assets/dress7.png') },
  { id: '8', name: 'Lame', price: 120, image: require('../assets/dress3.png') },
  
];

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  const [cart, setCart] = useState([]);
  const [numColumns, setNumColumns] = useState(2);

  useEffect(() => {
    const loadCart = async () => {
      const cartData = await AsyncStorage.getItem('cart');
      if (cartData) {
        setCart(JSON.parse(cartData));
      }
    };
    loadCart();
  }, []);

  const addToCart = async (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const renderProduct = ({ item }) => (
    <View style={styles.product}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.cartItemDescription}>reversible angora cardigan</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
      <Image source={require('../assets/add_circle.png')} style={styles.addButton} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
        <View style={styles.glam}>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
      <Image source={require('../assets/Menu.png')} style={{marginRight: 120}}/>
      </TouchableOpacity>
        <Image source={require('../assets/Logo.png')} style={{marginRight: 100}} />
        <Image source={require('../assets/Search.png')} style={{marginRight: 20}} />
        <Image source={require('../assets/shoppingBag.png')} style={{}} />
        </View>
        <View style={styles.title}>
            <Text style={{fontSize:25 , fontFamily: 'Didot' , marginRight: 30, marginLeft:10}}>OUR STORY</Text>
            <Image source={require('../assets/Listview.png')} style={{marginLeft: 140}} />
            <Image source={require('../assets/Filter.png')} style={{marginLeft: 20}}/>
        </View >
      <FlatList
        data={products}
        key={(numColumns)} // Change the key prop when the number of columns changes
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        numColumns={numColumns}
        columnWrapperStyle={numColumns > 1 && styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  row: {
    justifyContent: 'space-between',
  },
  glam: {
    flexDirection: 'row',
    height: 60,
    width: '100%',
    

  },
  title:{
    flexDirection:'row',

  },
  menuIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
    
  },
  product: {
    flex: 1,
    margin: 8,
    height:330,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'transparent',
    paddingBottom: 16,
  },
  productImage: {
    width: '100%',
    height: 240,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 16,
    fontWeight:'bold',
    fontFamily:'courier new',
    marginVertical: 8,
    textAlign: 'left',
  },
  productPrice: {
    fontSize: 14,
    color: '#FF8000',
    textAlign: 'left',
    marginVertical:30,

  },
  addButton: {
    borderRadius: 50,
    padding: 8,
    marginTop: -75,
    marginLeft:70,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  cartItemDescription: {
    fontSize: 14,
    color: '#888',
    marginVertical: -10,
  },
});
