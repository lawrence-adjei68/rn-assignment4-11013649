// App.js
import * as React from 'react';
import { NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
import { HomeScreen } from '../rn-assignment4-11013649/screens/HomeScreen';
import { SettingsScreen } from '../rn-assignment4-11013649/screens/SettingsScreen';
import merge from 'deepmerge';

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
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings">
            {() => <SettingsScreen toggleTheme={toggleTheme} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
