// App.js
import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import { NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
import { HomeScreen } from '../rn-assignment5-11013649/screens/HomeScreen';
import { MyCards } from '../rn-assignment5-11013649/screens/MyCards';
import { Statistics } from '../rn-assignment5-11013649/screens/Statistics';
import { SettingsScreen } from '../rn-assignment5-11013649/screens/SettingsScreen';
import { Card } from '../rn-assignment5-11013649/components/Card';
import { IconButton } from '../rn-assignment5-11013649/components/IconButton';
import merge from 'deepmerge';
import { Entypo , Feather ,AntDesign} from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Tab.Navigator>


        
      


          <Tab.Screen name=" " component={HomeScreen} 
          
          
          options={{
            tabBarIcon: ({focused})=>{
              return(
                <View style={{alignItems: "center", justifyContent:"center" , marginTop:10}}>
                  <Entypo name="home" size={20}   color={focused ? "#16247d":"#111"} />
                  <Text style={{fontSize: 12, color: "#16247d"}}>Home</Text>

                </View>
              )
            }
          }}
          
          
          />
          <Tab.Screen name="  " component={MyCards} 
           options={{
            tabBarIcon: ({focused})=>{
              return(
                <View style={{alignItems: "center", justifyContent:"center" , marginTop:10}}>
                  <AntDesign name="wallet" size={20}   color={focused ? "#16247d":"#111"} />
                  <Text style={{fontSize: 12, color: "#16247d"}}>My Cards</Text>

                </View>
              )
            }
          }}/>
          <Tab.Screen name="   " component={Statistics}
          options={{
            tabBarIcon: ({focused})=>{
              return(
                <View style={{alignItems: "center", justifyContent:"center" , marginTop:10}}>
                  <Entypo name="pie-chart" size={20}   color={focused ? "#16247d":"#111"} />
                  <Text style={{fontSize: 12, color: "#16247d"}}>Home</Text>

                </View>
              )
            }
          }} />
          <Tab.Screen name="     "options={{
            tabBarIcon: ({focused})=>{
              return(
                <View style={{alignItems: "center", justifyContent:"center" , marginTop:10}}>
                  <Feather name="settings" size={20}   color={focused ? "#16247d":"#111"} />
                  <Text style={{fontSize: 12, color: "#16247d"}}>Settings</Text>

                </View>
              )
            }
          }}>
          
            {() => <SettingsScreen toggleTheme={toggleTheme} />}
          </Tab.Screen>
          

        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
