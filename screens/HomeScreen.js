// screens/HomeScreen.js
import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={require('../assets/profile.png')} style={styles.icon1} />
        <View style={styles.roww}>
          <Text style={styles.title}>Welcome back,</Text>
          <Text style={styles.name}>Eric Atsu</Text>
        </View>
        <Image source={require('../assets/search.png')} style={styles.icon2} />
      </View>
      <Image source={require('../assets/Card.png')} style={styles.icon3} />
      <View style={styles.icons}>
        <Image source={require('../assets/send.png')} style={styles.icons} />

        <Image source={require('../assets/recieve.png')} style={styles.icons} />

        <Image source={require('../assets/loan.png')} style={styles.icons} />

        <Image source={require('../assets/topUp.png')} style={styles.icons} />
      </View>
      <View style={styles.texts}>
        <Text style={styles.iconText}>Send</Text>
        <Text style={styles.iconText}> </Text>
        <Text style={styles.iconText}>Receive</Text>
        <Text style={styles.iconText}> </Text>
        <Text style={styles.iconText}>Loan</Text>
        <Text style={styles.iconText}> </Text>
        <Text style={styles.iconText}>Topup</Text>
      </View>
      <View style={styles.trans}>
        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Transaction</Text>
        <Text
          style={{ left: 180, fontSize: 20, color: 'blue', fontWeight: 'bold' }}
        >
          See All
        </Text>
      </View>
      <View style={styles.tran}>
        <Image
          source={require('../assets/apple.png')}
          style={{ width: 43, height: 43, resizeMode: 'contain' }}
        />

        <View style={{ flexDirection: 'column' }}>
          <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 18 }}>
            Apple Store -$5,99
          </Text>

          <Text style={{ marginLeft: 10, fontSize: 16 }}>Entertainment</Text>
        </View>
      </View>
      <View style={styles.tran}>
        <Image
          source={require('../assets/spotify.png')}
          style={{ width: 43, height: 43, resizeMode: 'contain' }}
        />

        <View style={{ flexDirection: 'column' }}>
          <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 18 }}>
            Apple Store -$12,99
          </Text>

          <Text style={{ marginLeft: 10, fontSize: 16 }}>Entertainment</Text>
        </View>
      </View>
      <View style={styles.tran}>
        <Image
          source={require('../assets/moneyTransfer.png')}
          style={{ width: 43, height: 43, resizeMode: 'contain' }}
        />

        <View style={{ flexDirection: 'column' }}>
          <Text
            style={{
              marginLeft: 10,
              fontWeight: 'bold',
              fontSize: 18,
              color: 'blue',
            }}
          >
            Apple Store -$300
          </Text>

          <Text style={{ marginLeft: 10, fontSize: 16 }}>Entertainment</Text>
        </View>
      </View>
      <View style={styles.tran}>
        <Image
          source={require('../assets/grocery.png')}
          style={{ width: 43, height: 43, resizeMode: 'contain' }}
        />

        <View style={{ flexDirection: 'column' }}>
          <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 18 }}>
            Apple Store -$88
          </Text>

          <Text style={{ marginLeft: 10, fontSize: 16 }}>Entertainment</Text>
        </View>
      </View>
      <View style={styles.tran}>
        <Image
          source={require('../assets/apple.png')}
          style={{ width: 43, height: 43, resizeMode: 'contain' }}
        />

        <View style={{ flexDirection: 'column' }}>
          <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 18 }}>
            Apple Store -$5,99
          </Text>

          <Text style={{ marginLeft: 10, fontSize: 16 }}>Entertainment</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
  },
  tran: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  icons: {
    flexDirection: 'row',
    marginHorizontal: 25,
    justifyContent: 'space-between',
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  texts: {
    flexDirection: 'row',
    marginHorizontal: 50,
  },

  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  icon2: {
    width: 50,
    height: 50,
    alignItems: 'right',
    marginHorizontal: 90,
  },
  iconText: {
    marginTop: 10,
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  trans: {
    flexDirection: 'row',
    marginTop: 20,
  },

  icon3: {
    alignItems: 'right',
    marginHorizontal: 20,
    marginVertical: 30,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'left',
  },
  roww: {
    padding: 5,
    alignItems: 'left',
  },
});
