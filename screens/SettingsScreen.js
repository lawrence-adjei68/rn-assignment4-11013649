// screens/SettingsScreen.js
import * as React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { useTheme } from '@react-navigation/native';

export function SettingsScreen({ toggleTheme }) {
  const { colors } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const handleToggle = () => {
    setIsDarkTheme(!isDarkTheme);
    toggleTheme();
  };
  

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={{ color: colors.text }}>Settings</Text>
      <View style={styles.item}>
        <Text style={{ color: colors.text }}>Theme</Text>
        <Switch value={isDarkTheme} onValueChange={handleToggle} />
      </View>
      {/* Add more settings options here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
});
